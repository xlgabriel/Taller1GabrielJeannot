import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { AppPunto7 } from './puntos/AppPunto7'
import { AppPunto8 } from './puntos/AppPunto8'
import { AppPunto9 } from './puntos/AppPunto9'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppPunto9 />
  </React.StrictMode>
)

//El index no se vuelve a tocar
