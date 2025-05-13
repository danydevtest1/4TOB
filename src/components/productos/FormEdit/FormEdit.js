import { useState, useEffect } from "react";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import { initialValues, validationSchema } from "../FormProductos/FormProductos.form";
import { useFormik } from "formik";
import { Producto } from "../../../api";

const ctrProducto = new Producto();

export function FormEdit({dato,close, onReloaad, closed, Reload}) {
    
    
      const formik = useFormik({
        initialValues: initialValues(dato),
        validationSchema: validationSchema(),
        validateOnChange: false,
        onSubmit: async (formValue) => {
            if(!dato){
                await ctrProducto.createProducto(formValue);
                onReloaad();
                closed();
            }else{
                await ctrProducto.updateProducto(dato._id,formValue);
                Reload();
                close();

            }
         
          // console.log(guardarProducto);
          //console.log(formValue);
    
      
        
        },
      });

     
     
  return (
    
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
      <Button variant="success" type="submit" loading={formik.isSubmitting}>
        {!dato ? "Guardar" : "Actualizar"}
      </Button>
    </Form>
  )
}
