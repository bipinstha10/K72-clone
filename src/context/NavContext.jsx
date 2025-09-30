import React, { createContext, useState } from "react";

export const NavbarContext = createContext();

const NavContext = ({ children }) => {
  const [navOpen, isNavOpen] = useState(false);
  return (
    <div>
      <NavbarContext.Provider value={[navOpen, isNavOpen]}>{children}</NavbarContext.Provider>
    </div>
  );
};

export default NavContext;
