import React from "react";
import { Table, Button } from "react-bootstrap";

export function TableProducts({ datos }) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre</th>
          <th>Descripcion</th>
          <th>Precio</th>
          <th>Editar</th>
          <th>Eliminar</th>
        </tr>
      </thead>
      <tbody>
        {datos.map((dato, index) => (
          <tr key={dato._id}>
            <td>{index + 1}</td>
            <td>{dato.nombre}k</td>
            <td>{dato.descripcion}</td>
            <td>{dato.precio}</td>
            <td><Button variant="primary">Editar</Button></td>
            <td><Button variant="danger">Eliminar</Button></td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
