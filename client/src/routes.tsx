import React from "react";

import { LinksPage } from "./pages/LinksPage";
import { CreatePage } from "./pages/CreatePage";
import { DetailPage } from "./pages/DetailPage";
import { AuthPage } from "./pages/AuthPage";
import { Navigate, Route, Routes } from "react-router-dom";

export const useRoutes = (isAuthenticated: boolean) => {
  if (isAuthenticated) {
    return (
      <Routes>
        <Route  path="/links" element={<LinksPage />}></Route>

        <Route  path="/create" element={<CreatePage />}></Route>

        <Route path="/detail/:id" element={<DetailPage />}></Route>

        <Route path="*" element={<Navigate to="/create" />}></Route>
      </Routes>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<AuthPage />}></Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
