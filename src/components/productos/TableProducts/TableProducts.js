//import {useState} from "react";
import { Table } from "react-bootstrap";

import {Rows} from "./Rows";



export function TableProducts({ datos, eliminar, onReloaad}) {
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
          <Rows eliminar={eliminar} dato={dato} index={index} Reload={onReloaad}/>
        ))}
      </tbody>
    </Table>
  );
}
