import { useState } from "react";

export const AppPunto2 = () => {

	const [minutos, setMinutos] = useState("")
	const [valorPagar, setValorPagar] = useState("")

	const onInputChange = (event) => {
		setMinutos(event.target.value)
	}

	const handleAdd = (event) => {
		event.preventDefault();
		setMinutos('')

		if (minutos < 4 && minutos > 0) {
			const valorMinutos = minutos * 100
			setValorPagar(`Valor a pagar: ${valorMinutos} pesos`)
		} else {
			const valorMaxMin = 300 + ((minutos - 3) * 50)
			setValorPagar(`Valor a pagar: ${valorMaxMin} pesos`)
		}

	}


	return (
		<>
			<h1>¡Calcular el costo de tu llamada!</h1>
			<h2>¡Recuerda!</h2>
			<span>Toda llamada que dure menos de 3 minutos tiene un coste de 100 pesos.</span><br />
			<br />
			<span>Cada minuto adicional a partir de los 3 primeros cuesta 50 pesos.</span><br /><br />

			<h3>Ingrese la cantidad de minutos usados en su llamada</h3>
			<input type="number" value={minutos} onChange={(event) => onInputChange(event)} />
			<button onClick={(event) => handleAdd(event)}>Ingresar</button>
			<div>
				<p>Duración de la llamada: {minutos} minutos.</p>
				<p>{valorPagar}</p>
			</div>

		</>

	)
}