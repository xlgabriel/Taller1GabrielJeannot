import { useState } from "react";

const title = 'Botonesssssss';

const FirstApp = ({ value }) => {

  const [counter, setCounter] = useState(value);

  const handleAdd = () => { setCounter(counter + 1) }
  const handleSubstract = () => { setCounter(counter - 1) }
  const handleReset = () => { setCounter(value) }

  return (

    <>
      <h1>{title}</h1>
      <span>{counter}</span>
      <button onClick={() => handleAdd()}> AGREGAR </button>
      <button onClick={() => handleSubstract()}> RESTAR </button>
      <button onClick={() => handleReset()}> REINICIAR </button>

    </>)
}

export { FirstApp }