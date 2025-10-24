import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from "./pages/mainPage";
import { HelperProvider } from "./globals/helper/helperContext.jsx";
import { ContentStatusProvider } from "./globals/contentStatus";
import { UserLongLatProvider } from "./globals/userLongLat.jsx";
import { LoginStatusProvider } from "./globals/loginStatus.jsx";

export default function App() {
  return (
    <>
      <LoginStatusProvider>
        <UserLongLatProvider>
          <ContentStatusProvider>
            <HelperProvider>
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<MainPage />} />
                </Routes>
              </BrowserRouter>
            </HelperProvider>
          </ContentStatusProvider>
        </UserLongLatProvider>
      </LoginStatusProvider>
    </>
  );
}
