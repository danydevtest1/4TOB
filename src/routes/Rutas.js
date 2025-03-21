import React from "react";
import { Routes, Route } from "react-router-dom";
import { ListProductos, FormProductos } from "../components/productos";
import { Home } from "../pages/inicio";
import { Layout } from "../layouts";

export function Rutas() {
  const plantillas = (Layout, Page) => (
    <Layout>
      <Page />
    </Layout>
  );

  return (
    <Routes>
      <Route path="/" element={plantillas(Layout, Home)} />
      <Route path="/card" element={plantillas(Layout, ListProductos)} />
      <Route path="/formulario" element={plantillas(Layout, FormProductos)} />
    </Routes>
  );
}
