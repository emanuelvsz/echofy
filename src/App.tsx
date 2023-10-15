import * as React from "react";
import { Routes, Route } from "react-router";
import LoginPage from "./views/login";
import HomePage from "./views/home";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />}/>
      <Route path="/home" element={<HomePage />} />
    </Routes>
  );
}
