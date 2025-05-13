import {useState} from 'react'
import {Button, Modal, Row} from "react-bootstrap";
import { FormEdit } from '../FormEdit';

export function Rows({dato,index,eliminar, Reload}) {
     const [show,setShow]=useState(false);

    const openClose=()=>setShow((prevState)=>!prevState); 
  

  return (
   <>
    <tr key={dato._id}>
    <td>{index + 1}</td>
    <td>{dato.nombre}</td>
    <td>{dato.descripcion}</td>
    <td>{dato.precio}</td>
    <td><Button variant="primary" onClick={openClose}>Editar</Button></td>
    <td><Button variant="danger" onClick={()=>eliminar(dato._id)}>Eliminar</Button></td>
  </tr>
  <Row>
        <Modal show={show} onHide={openClose}  size="lg" aria-labelledby="example-modal-sizes-title-lg">
          <Modal.Header closeButton>
            <Modal.Title>Editar producto</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FormEdit dato={dato} close={openClose} Reload={Reload}/>
          </Modal.Body>
        </Modal>
      </Row>
  </>
  
  )
}
