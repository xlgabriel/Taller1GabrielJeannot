import { useState } from "react";

export const AppPunto4 = () => {

    const [numero1, setNumero1] = useState('')
    const [numero2, setNumero2] = useState('')
    const [numero3, setNumero3] = useState('')
    const [values, setValue] = useState('')

    const onInputChange1 = (event) => {
        setNumero1(event.target.value.replace(/\D/g, ''))
    }
    const onInputChange2 = (event) => {
        setNumero2(event.target.value.replace(/\D/g, ''))
    }
    const onInputChange3 = (event) => {
        setNumero3(event.target.value.replace(/\D/g, ''))
    }

    const onClickButton = () => {
        const arrayNum = [numero1, numero2, numero3]
        const countsObject = {}
        arrayNum.forEach((x) => countsObject[x] = (countsObject[x] || 0) + 1)
        if (Object.values(countsObject).length < 3) {
            setValue(`${Math.max(...Object.values(countsObject))} números se repiten`)
        } else {
            setValue("No hay números repetidos")
        }
    }

    return (
        <>
            <h1>Identificador de la cantidad de números repetidos</h1>
            <span>Aquí podrás ver cuántos números se repiten, ¡ingrésalos para probar!</span><br /><br />

            <input type="text" placeholder="Primer número" value={numero1} onChange={(event) => onInputChange1(event)} />
            <input type="text" placeholder="Segundo número" value={numero2} onChange={(event) => onInputChange2(event)} />
            <input type="text" placeholder="Tercer número" value={numero3} onChange={(event) => onInputChange3(event)} />

            <button onClick={() => onClickButton()}>AGREGAR</button>
            <h2>{values}</h2>

        </>

    )
}