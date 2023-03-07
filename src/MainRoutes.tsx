import path from "path";
import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "./components/page/MainPage";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
    </Routes>
  );
};

export default MainRoutes;
