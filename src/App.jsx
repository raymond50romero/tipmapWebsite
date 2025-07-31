import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from "./pages/mainPage";
import { HelperProvider } from "./components/helper/helperContext";
import { ContentStatusProvider } from "./globals/contentStatus/contentStatus";

export default function App() {
  return (
    <>
      <ContentStatusProvider>
        <HelperProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<MainPage />} />
            </Routes>
          </BrowserRouter>
        </HelperProvider>
      </ContentStatusProvider>
    </>
  );
}
