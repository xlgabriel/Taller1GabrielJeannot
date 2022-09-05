import { useState } from 'react'

export const AppPunto5 = () => {

    const [numerosOrden, setNumerosOrden] = useState(['']);
    const [numerosOrden2, setNumerosOrden2] = useState(['']);
    const [numerosDesorden, setNumerosDesorden] = useState('');

    const onAddNumero = () => {
        if (numerosDesorden !== '') {
            setNumerosOrden(list => [...list, numerosDesorden])
            setNumerosDesorden('')
        }

    }

    const onSetNumerosDesorden = (event) => {
        event.preventDefault();
        setNumerosDesorden(event.target.value.replace(/\D/g, ''))
    }

    const organizarLista = () => {
        setNumerosOrden2(numerosOrden.sort(function (a, b) { return a - b }));
    }

    const borrarUltimoNumero = () => {
        numerosOrden.pop()
        numerosDesorden.pop()
    }


    return (
        <>
            <h1>¡Organizar tu lista en orden numérico!</h1>
            <h3>Aquí podrás ordenar tu lista de números en orden de mayor a menor</h3>
            <input type="text" value={numerosDesorden} onChange={(event) => onSetNumerosDesorden(event)} />
            <button onClick={() => onAddNumero()}> Añadir Número</button>
            <button onClick={() => borrarUltimoNumero()}> Borrar último número </button>
            <button onClick={() => organizarLista()}> Organizar lista</button>

            <ol>
                {
                    numerosOrden.map(
                        (numerosDesorden, key) => {
                            return <li key={key}>{numerosDesorden}</li>
                        }
                    )
                }
            </ol>

        </>
    )
}