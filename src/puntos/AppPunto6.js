import { useState } from "react";

export const AppPunto6 = () => {

	const [numero, setNumero] = useState('')
	var impares = "Números: "


	const onInputChange = (event) => {
		setNumero(event.target.value.replace(/\D/g, ''))
	}

	const handleAdd = (event) => {
		event.preventDefault();
		setNumero('')
		for (var i = 0; i < numero; i++) {
			if (i % 2 !== 0) {
				impares = impares + i + ", ";
			}

		}
		document.getElementById('listafinal').innerHTML = impares;
	}


	return (
		<>
			<h1>¡Numeros impares menores al tuyo!</h1>
			<h3>Esta app te permite ver todos los números impares menores al que ingreses acá abajo</h3>
			<input type="text" placeholder="Numero de Referencia" value={numero} onChange={(event) => onInputChange(event)} />
			<button onClick={(event) => handleAdd(event)}>Ver resultados</button>
			<h3>Resultado:</h3>
			<div id="listafinal"></div>
		</>

	)
}