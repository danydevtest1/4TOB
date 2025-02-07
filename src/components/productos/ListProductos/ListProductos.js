import React from "react";
import { Stack, Row, Col } from "react-bootstrap";
import { ItemProductos } from "../ItemProductos";
import { Productos } from "../../../utils";

import "./ListProductos.scss";

export function ListProductos() {
  return (
    <Stack gap={12} className="container">
      <h1>Lista de productos</h1>
      <Row xs={1} sm={2} md={3} lg={4} xl={5}>
        {Productos.map((producto) => (
          <Col className="p-2">
            <ItemProductos producto={producto} />
          </Col>
        ))}
      </Row>
    </Stack>
  );
}
