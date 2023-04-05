import React, { useState } from "react";
import { AuthProvider } from "../context/AuthContext";
import { LanguageProvider } from "../context/LanguageContext";
import { ThemeProvider } from "../context/ThemeContext";
import { FooterContext } from "./FooterContext";
import { HeaderContext } from "./HeaderContext";
import { MainContext } from "./MainContext";

//todos los elementos de la IU se verian afectados por este valor

export const MyPageContext = () => {
  // OTRA COSA QUE HACE EL CONTEXT, ES DEJAR MAS LIMPIO EL CODIGO

  return (
    <div className="my-page">
      <ThemeProvider>
        <LanguageProvider>
          <AuthProvider>
            <HeaderContext />
            <MainContext />
            <FooterContext />
          </AuthProvider>
        </LanguageProvider>
      </ThemeProvider>
    </div>
  );
};
