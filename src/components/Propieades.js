import React from 'react'

export default function Propieades(props) {
    const {valor,incrementar,decrementar}=props;
  return (
    <div>
        <h1>Valor del hook: {valor}</h1>
      <button onClick={incrementar}>Incrementar</button>
      <button onClick={decrementar}>Decrementar</button>
    </div>
  )
}
