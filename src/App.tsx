import * as React from "react";
import { Routes, Route } from "react-router";
import LoginPage from "./views/login";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="" element={<p>Teste</p>} />
    </Routes>
  );
}
