import React, { createContext, useContext, useState } from "react";

interface HeaderVisibilityContextProps {
  isHeaderVisible: boolean;
  setIsHeaderVisible: (visible: boolean) => void;
}

const HeaderVisibilityContext = createContext<
  HeaderVisibilityContextProps | undefined
>(undefined);

export const useHeaderVisibilityContext = () => {
  const context = useContext(HeaderVisibilityContext);
  if (!context) {
    throw new Error(
      "useHeaderVisibilityContext must be used within a HeaderVisibilityProvider"
    );
  }
  return context;
};

export const HeaderVisibilityProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  return (
    <HeaderVisibilityContext.Provider
      value={{ isHeaderVisible, setIsHeaderVisible }}
    >
      {children}
    </HeaderVisibilityContext.Provider>
  );
};
