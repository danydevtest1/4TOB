import { useState } from "react";

import Propieades from "./Propieades";

export default function Operaciones() {
  const [valor, setValor] = useState(0);

  const incrementarValor = () => {
    setValor(valor + 1);
  };
  const decrementarValor = () => {
    setValor(valor - 1);
  };
  return (
    <div>
      <Propieades valor={valor} incrementar={incrementarValor} decrementar={decrementarValor}/>
    </div>
  );
}
