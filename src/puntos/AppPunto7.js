import { useState } from "react";

export const AppPunto7 = () => {

  let array = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));
  let [position, setPosition] = useState('');

  const onSetPosition = (evt) => {
    setPosition(evt.target.value.replace(/\D/g, ''))
  }

  const onAddPosition = () => {


    if (array[position] !== undefined) {
      document.querySelector('#result').textContent = array[array.length - 1];
    }
    else {
      alert("¡Error!\nDebe ser un número entre 0 y 9.");
    }

  }


  return (

    <>
      <h1>¡Números aleatorios!</h1><span>Escribe la posición, de 0 a 9, de uno de los números aleatorios del arreglo de 10 posiciones </span><br /><br />

      <input type="text" value={position}
        onChange={(event) => onSetPosition(event)} />
      <button onClick={() => onAddPosition()}> Agregar y mostrar su valor </button>
      <br /><br />
      <div>El resultado aparecerá abajo</div>
      <div id="result"></div>
    </>
  )

}