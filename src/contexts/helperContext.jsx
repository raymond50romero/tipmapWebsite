import React, { createContext, useContext, useState, useCallback, useRef } from "react";
import HelperMessage from "../components/helper/helperMessage.jsx";
import PropTypes from "prop-types";

const DURATION = 3000;

const HelperContext = createContext(() => {});

export function HelperProvider({ children }) {
  const [message, setMessage] = useState("");
  const [visible, setVisible] = useState(false);
  const timeoutRef = useRef(null);
  const stateRef = useRef({ message, visible });

  // Keep stateRef in sync with state
  stateRef.current = { message, visible };

  const showMessage = useCallback((msg) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    const { message: currentMessage, visible: isVisible } = stateRef.current;

    // If it's already visible, we briefly hide it to trigger the animation again if it's the same message
    if (isVisible && currentMessage === msg) {
      setVisible(false);
      setTimeout(() => {
        setMessage(msg);
        setVisible(true);
        timeoutRef.current = setTimeout(() => {
          setVisible(false);
          timeoutRef.current = null;
        }, DURATION);
      }, 50);
    } else {
      setMessage(msg);
      setVisible(true);
      timeoutRef.current = setTimeout(() => {
        setVisible(false);
        timeoutRef.current = null;
      }, DURATION);
    }
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

HelperProvider.propTypes = {
  children: PropTypes.any,
};
