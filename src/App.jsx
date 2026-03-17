import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import MainPage from "./pages/mainPage";
import { HelperProvider } from "./contexts/helperContext.jsx";
import { ContentStatusProvider } from "./contexts/contentStatus";
import { UserLongLatProvider } from "./contexts/userLongLat.jsx";
import { LoginStatusProvider } from "./contexts/loginStatus.jsx";
import { ProfileStatusProvider } from "./contexts/profileStatus.jsx";
import { MapStateProvider } from "./contexts/mapState.jsx";

const queryClient = new QueryClient();

export default function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
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
      </QueryClientProvider>
    </>
  );
}
