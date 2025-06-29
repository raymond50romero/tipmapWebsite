import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainPage from './pages/mainPage';
import { HelperProvider } from './components/helper/helperContext';

function App() {
  return (
    <>
      <HelperProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />} />
          </Routes>
        </BrowserRouter>
      </HelperProvider>
    </>
  );
}

export default App;
