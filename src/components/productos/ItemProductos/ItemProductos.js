import React from "react";
import { Card, Button } from "react-bootstrap";

export function ItemProductos(props) {
    const {producto}=props;

  return (
   
      <Card>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{producto.nombre}</Card.Title>
          <Card.Text>
           {producto.descripcion}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
  );
}
