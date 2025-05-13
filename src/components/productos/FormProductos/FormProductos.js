import { useState, useEffect } from "react";
import { Button, Col, Form, InputGroup, Row, Modal } from "react-bootstrap";
/* import { initialValues, validationSchema } from "./FormProductos.form";
import { useFormik } from "formik"; */
import { Producto } from "../../../api";
import { TableProducts } from "../TableProducts";
import { FormEdit } from "../FormEdit";


const ctrProducto = new Producto();

export function FormProductos() {
  const [datos, setDatos] = useState([]);
  const [show,setShow]=useState(false);
  const [reload, setReload]=useState(false);

  const openClose=()=>setShow((prevState)=>!prevState);
  const onReloaad=()=>setReload((prevState)=>!prevState);

/*   const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      await ctrProducto.createProducto(formValue);
      // console.log(guardarProducto);
      console.log(formValue);
      downloadDAta();
    },
  });  */

  const downloadDAta = async () => {
    const info = await ctrProducto.buscarProductos();
    setDatos(info);
    console.log(info);
  };

  const eliminarProducto = async (id) => {
    try {
      await ctrProducto.deleteProducto(id);
      downloadDAta();
    } catch (error) {
      throw error;
    }
  
  };
  

  useEffect(() => {
    downloadDAta();
  }, [reload]);

  return (
    <div className="p-5">
    <Button variant="primary" onClick={openClose}>Agregar</Button>
      <Row>
        <TableProducts datos={datos} eliminar={eliminarProducto} onReloaad={onReloaad}/>
      </Row>
      <Row>
        <Modal show={show} onHide={openClose} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>
              Agregar Producto
            </Modal.Title>
          </Modal.Header>
          <Modal.Body><FormEdit onReloaad={onReloaad} closed={openClose}/></Modal.Body>
        </Modal>
      </Row> 
    </div>
  );
}
