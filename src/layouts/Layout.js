import React from "react";

import { Menu } from "../components/Menu";

import { Footer } from "../pages/Footer";

export function Layout({ children }) {
  return (
    <div className="container">
      <div className="init">
        <Menu />
      </div>
      <div className="body p-2">{children}</div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
