import { useState, createContext, useEffect } from "react";

export const ActiveNavItemContext = createContext();

export const ActiveNavItemProvider = ({ children }) => {
  const [activeNavItem, setActiveNavItem] = useState(null);

  useEffect(() => {
    const lastUrlSegment = window.location.href.split("/").pop();
    if (lastUrlSegment === "") {
      setActiveNavItem("home");
    } else {
      setActiveNavItem(window.location.href.split("/").pop());
    }
  }, [activeNavItem]);

  return (
    <ActiveNavItemContext.Provider value={{ activeNavItem, setActiveNavItem }}>
      {children}
    </ActiveNavItemContext.Provider>
  );
};
