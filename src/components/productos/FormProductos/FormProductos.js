import { useState, useEffect } from "react";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import { initialValues, validationSchema } from "./FormProductos.form";
import { useFormik } from "formik";
import {Producto} from '../../../api';
import {TableProducts}from "../TableProducts";

const ctrProducto=new Producto();

export function FormProductos() {
  const [datos, setDatos] = useState([]);

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit:async (formValue) => {

        await ctrProducto.createProducto(formValue);
     // console.log(guardarProducto);  
      //console.log(formValue);
      downloadDAta();
      
    },
  });

  const downloadDAta=async()=>{
    const info= await ctrProducto.buscarProductos();
    setDatos(info);
    console.log(info);
    
  }

useEffect(() => {
  downloadDAta();
}, [])

  return (
    <div className="p-5">
      <Form onSubmit={formik.handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} sm="12" md="6" xl="4">
            <Form.Label>Nombre Producto</Form.Label>
            <Form.Control
              name="nombre"
              type="text"
              placeholder="Producto"
              value={formik.values.nombre}
              onChange={formik.handleChange}
            />
          </Form.Group>
          <Form.Group as={Col} sm="12" md="6" xl="4">
            <Form.Label>Descripcion</Form.Label>
            <Form.Control
              required
              type="text"
              name="descripcion"
              value={formik.values.descripcion}
              onChange={formik.handleChange}
              placeholder="Descripcion del producto"
            />
          </Form.Group>
          <Form.Group as={Col} sm="12" md="6" xl="4">
            <Form.Label>Precio</Form.Label>
            <InputGroup>
              <Form.Control
                type="number"
                placeholder="Precio"
                name="precio"
                value={formik.values.precio}
                onChange={formik.handleChange}
              />
            </InputGroup>
          </Form.Group>
        </Row>
        <Button variant="success" type="submit">
          Enviar
        </Button>
      </Form>
      <Row>
       <TableProducts datos={datos}/>
      </Row>
    </div>
  );
}
