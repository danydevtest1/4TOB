import React from "react";
import { Stack } from "react-bootstrap";
import { ItemProductos } from "../ItemProductos";
import { Productos } from "../../../utils";

import "./ListProductos.scss";

export function ListProductos() {
  return (
    <Stack gap={12}>
      <div className="container card-it p-2 align-content-between" style={{ textAlign: "center" }}>
        <h1>Lista de productos</h1>
        <div className="card-it__cad align-content-between">
          {Productos.map((producto) => (
            <ItemProductos
              nombre={producto.nombre}
              descripcion={producto.descripcion}
            />
          ))}

          <div>
            <h1>Productos</h1>
          </div>
        </div>
      </div>
    </Stack>
  );
}
