import React, { createContext, useContext, useState, useCallback } from 'react';
import HelperMessage from './helperMessage.jsx';

const DURATION = '3000';

const HelperContext = createContext(() => {});

export function HelperProvider({ children }) {
  const [message, setMessage] = useState('');
  const [visible, setVisible] = useState(false);

  const showMessage = useCallback((msg) => {
    setMessage(msg);
    setVisible(true);
    setTimeout(() => {
      setVisible(false);
    }, DURATION);
  }, []);

  return (
    <HelperContext.Provider value={showMessage}>
      {children}
      <HelperMessage message={message} visible={visible} />
    </HelperContext.Provider>
  );
}

export function useHelper() {
  return useContext(HelperContext);
}
