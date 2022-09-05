import { useState } from "react";

export const AppPunto11 = () => {

    const [Nombre, setNombre] = useState('')
    const [Nota, setNota] = useState('')
    const [Notas, setNotas] = useState([])
    const [Resultado, setResultado] = useState('')


    const HandleReset = () => {
        setNotas(list => [])
    }

    const onSetNombre = (event) => {
        setNombre(event.target.value.replace(/[^a-zA-Z0-9@]+/, ''))
    }

    const onSetNotas = (event) => {
        setNota(event.target.value.replace(/\D+/g, ''))
    }

    const onAddNotas = () => {
        if (Nota >= 0.0 && Nota <= 5.0) {
            if (Notas.length < 3) {
                setNotas(list => [...list, Nota])
            } else {
                onSetResultado()
            }
        } else {
            alert("¡ERROR!\nDebes ingresar una nota entre 0.0 y 5.0, lógicamente")
        }
    }

    const onSetResultado = () => {

        var total = Notas.length
        var suma = 0
        var almacenar = 0
        var prom = 0

        for (let i = 0; i < total; i++) {

            almacenar = Notas[i];
            suma += parseInt(almacenar)

        }
        prom = suma / total
        if (prom >= 3.0) {
            setResultado("¡" + Nombre + ", logras pasar la materia con un puntaje de " + prom + "!")
        }
        if (isNaN(prom)) {
            alert("¡ERROR!\nRevisa que no hayas ingresado una letra por error.")
            setResultado('')
            HandleReset()
        }
        else {
            setResultado(Nombre + ", no pasas la materia, tu puntaje fue de " + prom + "😔")
        }

    }


    return (
        <div>
            <h1> Conoce si ganaste o perdiste la materia </h1>
            <h4> Por favor, escribe tu nombre y las tres notas para conocer tu resultado en la materia.</h4>
            <h4> Después de esto, presiona una vez más el botón para calcular.</h4>

            <br></br>

            <input type="text" placeholder="Nombre" onChange={(event) => onSetNombre(event)}></input>
            <input type="number" placeholder="Nota" onChange={(event) => onSetNotas(event)}></input>

            <button onClick={() => onAddNotas()} >Agregar y calcular</button>
            <button onClick={() => HandleReset()} >Borrar notas</button>

            <ol>
                <h4>Notas</h4>
                {
                    Notas.map(
                        (nota, key) => {
                            return <li key={key}> {nota}</li>
                        }
                    )
                }
            </ol>
            <ol>
                <h5>{Resultado}</h5>
            </ol>
        </div>

    )
}