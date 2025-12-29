import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";
import { camelCase, isPlainObject, mapKeys, mapValues } from "lodash";

const StorageController = {
  get: <T>(key: string): T | null =>
    typeof window !== "undefined" ? (localStorage.getItem(key) as T) : null,
  set: (key: string, value: string) => localStorage.setItem(key, value),
  remove: (key: string) => localStorage.removeItem(key),
};

export const BackendClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001",
  headers: { "Content-Type": "application/json" },
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
  async (error: AxiosError) => {
    const originalRequest = error.config as InternalAxiosRequestConfig & {
      _retry?: boolean;
    };

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const refreshToken = StorageController.get<string>("refreshToken");
        const response = await axios.post(
          `${BackendClient.defaults.baseURL}/auth/refresh`,
          { refreshToken }
        );
        const { accessToken, refreshToken: newRefresh } = response.data;

        StorageController.set("accessToken", accessToken);
        StorageController.set("refreshToken", newRefresh);

        return BackendClient(originalRequest);
      } catch {
        StorageController.remove("accessToken");
        window.location.href = "/login";
      }
    }
    return Promise.reject(error);
  }
);
