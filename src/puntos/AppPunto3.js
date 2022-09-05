import { useState } from "react";

export const AppPunto3 = () => {

    const [nombre, setNombre] = useState('')
    const [hora, setHora] = useState('')
    const [saludo, setSaludo] = useState('')

    const onInputChange1 = (event) => {
        setNombre(event.target.value.replace(/[^a-zA-Z0-9@]+/, ''))
    }

    const onInputChange2 = (event) => {
        setHora(event.target.value.replace(/\D/g, ''))
    }

    const handleAdd = (event) => {
        event.preventDefault();
        setHora('')

        if (hora <= 11.59 && hora >= 0) {
            const saludoSegunHora = "¡Buenos días, "
            setSaludo(`Saludo: ${saludoSegunHora}` + `${nombre}!`)
        } else if (hora <= 18.59 && hora >= 12) {
            const saludoSegunHora = "¡Buenas tardes, "
            setSaludo(`Saludo: ${saludoSegunHora}` + `${nombre}!`)
        } else if (hora <= 23.59 && hora >= 7) {
            const saludoSegunHora = "¡Buenas noches, "
            setSaludo(`Saludo: ${saludoSegunHora}` + `${nombre}!`)
        } else {
            alert("¡Error!\nDebe ingresar una hora entre 0 y 24");
            alert("¡Que no se repita!");
            setSaludo(``)
        }
    }

    return (
        <>
            <h1>Saludo contextualizado</h1>
            <h3>Por favor, ingresa tu nombre</h3>
            <input type="text" value={nombre} onChange={(event) => onInputChange1(event)} />

            <br />
            <h3>Por favor, ingresa la hora (formato 24h)</h3>
            <input type="text" value={hora} onChange={(event) => onInputChange2(event)} />

            <button onClick={(event) => handleAdd(event)}>SALUDAR</button>
            <div>
                <h2>{saludo}</h2>
            </div>
        </>
    )
}