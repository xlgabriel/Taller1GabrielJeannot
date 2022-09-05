import { useState } from "react";

export const AppPunto1 = () => {

	const [segundos, setSegundos] = useState('')
	const [valorFinal, setValorFinal] = useState('')

	const onInputChange = (event) => {
		setSegundos(event.target.value)
	}

	const handleAdd = (event) => {
		event.preventDefault();
		setSegundos('')
		const timeHoras = Math.round(segundos / 3600)
		const timeMinutos = Math.round((segundos - (timeHoras * 3600)) / 60)
		const timeSegundos = Math.round(segundos - ((timeHoras * 3600) + (timeMinutos * 60)))


		setValorFinal(`${timeHoras} Horas, ${timeMinutos} Minutos, ${timeSegundos} Segundos`)

	}


	return (
		<>
			<h1>Convertidor de segundos en hora/minuto/segundo</h1>
			<span>Ingresa los segundos que desees convertir</span>
			<br /><br />
			<input type="number" placeholder="Segundos" value={segundos} onChange={(event) => onInputChange(event)} />
			<button onClick={(event) => handleAdd(event)}>Convertir</button>
			<br /><br />

			<div>
				<span>Resultado</span>
				<h3>{valorFinal}</h3>
			</div>

		</>

	)
}