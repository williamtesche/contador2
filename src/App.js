import { useState } from "react";
import './index.css'


export default function Contador() {

  const [numero, setNumero] = useState(0)

  function mais(){
    setNumero(numero  + 1)
    console.log(numero)
  }

  function reset(){
    setNumero(0)
  }
  
  function menos(){
    setNumero(numero  - 1)
  }

  return <div>
      <h1>contador</h1>
      <p>{numero}</p>
      <button onClick={mais}>Mais</button>
      <button onClick={reset}>Reset</button>
      <button onClick={menos}>Menos</button>
      
  </div>


    
      
  

}

