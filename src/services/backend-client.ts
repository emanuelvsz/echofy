import axios, { AxiosError } from "axios";
import { camelCase, isPlainObject, mapKeys, mapValues } from "lodash";

const StorageController = {
  get: <T>(key: string): T | null =>
    typeof window !== "undefined" ? (localStorage.getItem(key) as T) : null,
  set: (key: string, value: string) => localStorage.setItem(key, value),
  remove: (key: string) => localStorage.removeItem(key),
};

export const BackendClient = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_API_URL || "https://echofy-backend-tau.vercel.app",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    "ngrok-skip-browser-warning": "true",
  },
  timeout: 20000,
});

const deeplyApplyKeyTransform = (obj: unknown): unknown => {
  if (Array.isArray(obj)) {
    return obj.map((item) => deeplyApplyKeyTransform(item));
  }

  if (isPlainObject(obj)) {
    const typedObj = obj as Record<string, unknown>;
    const n = mapKeys(typedObj, (_v, k) => camelCase(k));
    return mapValues(n, (v) => deeplyApplyKeyTransform(v));
  }

  return obj;
};

BackendClient.interceptors.request.use(
  (config) => {
    const token = StorageController.get<string>("accessToken");
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

BackendClient.interceptors.response.use(
  (response) => ({
    ...response,
    data: deeplyApplyKeyTransform(response.data),
  }),
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      StorageController.remove("accessToken");
      if (typeof window !== "undefined") {
        window.location.href = "/login";
      }
    }
    return Promise.reject(error);
  }
);
