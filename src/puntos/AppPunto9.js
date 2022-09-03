import { useState } from "react";

export const AppPunto9 = () => {


    const [row, setRow] = useState('');
    const [col, setCol] = useState('');


    const onSetRow = (evt) => {
        setRow(evt.target.value.replace(/\D/g, ''))
    }

    const onSetCol = (evt) => {
        setCol(evt.target.value.replace(/\D/g, ''))
    }

    const tableCreate = (row, col) => {

        let body = document.body;
        let tbl = document.createElement('table');
        tbl.style.width = '200px';
        tbl.style.border = '1px solid black';

        for (let i = 0; i < row; i++) {
            let tr = tbl.insertRow();
            for (let j = 0; j < col; j++) {
                let td = tr.insertCell();
                td.appendChild(document.createTextNode(`${i},${j}`));
                td.style.border = '1px solid black';
            }
        }
        body.appendChild(tbl);

    }


    return (

        <>
            <h1>Tabla a tu antojo</h1><span> ¡Digita las filas y columnas de la tabla a dibujar! </span><br /><br />
            <span> Digita el valor de las filas </span><br />
            <input type="text" value={row} onChange={(event) => onSetRow(event)} />
            <br />
            <span> Digita el valor de las columnas</span><br />
            <input type="text" value={col} onChange={(event) => onSetCol(event)} />
            <br /><br />
            <button onClick={() => tableCreate(row, col)}> Generar tabla </button>
            <br /><br />
        </>
    )

}