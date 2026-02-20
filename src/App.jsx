import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from "./pages/mainPage";
import { HelperProvider } from "./globals/helper/helperContext.jsx";
import { ContentStatusProvider } from "./globals/contentStatus";
import { UserLongLatProvider } from "./globals/userLongLat.jsx";
import { LoginStatusProvider } from "./globals/loginStatus.jsx";
import { ProfileStatusProvider } from "./globals/profileStatus.jsx";
import { MapStateProvider } from "./globals/mapState.jsx";

export default function App() {
  return (
    <>
      <HelperProvider>
        <LoginStatusProvider>
          <ProfileStatusProvider>
            <MapStateProvider>
              <UserLongLatProvider>
                <ContentStatusProvider>
                  <BrowserRouter>
                    <Routes>
                      <Route path="/" element={<MainPage />} />
                    </Routes>
                  </BrowserRouter>
                </ContentStatusProvider>
              </UserLongLatProvider>
            </MapStateProvider>
          </ProfileStatusProvider>
        </LoginStatusProvider>
      </HelperProvider>
    </>
  );
}
