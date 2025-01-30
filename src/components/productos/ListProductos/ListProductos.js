import React from "react";
import { Stack } from "react-bootstrap";
import { ItemProductos } from "../ItemProductos";
import { Productos } from "../../../utils";

export function ListProductos() {
  return (
    <Stack gap={3}>
      <div className="container p-2" style={{ textAlign: "center" }}>
        <h1>Lista de productos</h1>
        <div className="target">
          {Productos.map((producto) => (
            <ItemProductos
              nombre={producto.nombre}
              descripcion={producto.descripcion}
            />
          ))}
        </div>
      </div>
    </Stack>
  );
}
