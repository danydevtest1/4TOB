import React from "react";

import { Menu } from "../pages/Menu";
import { Footer } from "../pages/Footer";

export function Layout({ children }) {
  return (
    <div className="container">
      <div className="init">
        <Menu />
      </div>
      <div className="body">{children}</div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
