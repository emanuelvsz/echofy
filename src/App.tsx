import * as React from "react";
import { Routes, Route } from "react-router";
import HomePage from "./views/home";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}
