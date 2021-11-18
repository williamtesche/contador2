import { useState } from "react";

export default function Contador({nome}) {

  const [numero,setNumero] = useState(0)

  function mais() {
    setNumero(numero + 1)
  }



  function menos() {
    setNumero(numero - 1)
  }



  function reset() {
    setNumero(0)
  }




  return (
    <>
     <h1>{nome}</h1>
     <p>{numero}</p>

     <button onclick={mais}>mais</button>
     <button onclick={reset}>reset</button>
     <button onclick={menos}>menos</button>
    </>
  );
}

