import { useState } from "react";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import { initialValues, validationSchema } from "./FormProductos.form";
import { useFormik } from "formik";

export function FormProductos() {
  //const [datos, setDatos] = useState([]);

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: (formValue) => {
      console.log(formValue);
    },
  });

  /*  const onChange=(e)=>{
    const {name,value}=e.target;
    setDatos({...datos, [name]:value})
  }

const onSubmit=(e)=>{
  e.preventDefault();
  console.log(datos);
  
} */

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
    </div>
  );
}
