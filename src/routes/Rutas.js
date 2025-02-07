import React from 'react';
import {Routes, Route} from "react-router-dom";
import {ListProductos} from "../components/productos";
import {Home} from "../pages/inicio";

export function Rutas() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/card' element={<ListProductos/>}/>
    </Routes>
  )
}
