import {useState} from "react";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";

export function FormProductos() {
  const [datos, setDatos] = useState([]);

  const onChange=(e)=>{
    const {name,value}=e.target;
    setDatos({...datos, [name]:value})
  }

const onSubmit=(e)=>{
  e.preventDefault();
  console.log(datos);
  
}


  return (
    <div className="p-5">
      <Form onSubmit={onSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} sm="12" md="6" xl="4">
            <Form.Label>Nombre Producto</Form.Label>
            <Form.Control
             name="nombre" 
            type="text" 
            placeholder="Producto" 
            onChange={onChange}
            />
          </Form.Group>
          <Form.Group as={Col} sm="12" md="6" xl="4">
            <Form.Label>Descripcion</Form.Label>
            <Form.Control
              required
              type="text"
              name="descripcion"
              onChange={onChange}
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
              onChange={onChange}
               />
            </InputGroup>
          </Form.Group>
        </Row>

        <Button variant="success" type="submit">Enviar</Button>
      </Form>
    </div>
  );
}
