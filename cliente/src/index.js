import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Principal from './componentes/inicio/Inicio';
import Contacto from './componentes/contactenos/contacto';
import Pedidos from './componentes/pedidos/pedidos';
import Conocenos from './componentes/conocenos/conocenos';
import Ventas from './componentes/ventas/ventas';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Principal/>}></Route>
    <Route path='principal' element={<Principal/>}></Route>
    <Route path='contacto' element={<Contacto/>}></Route>
    <Route path='pedidos' element={<Pedidos/>}></Route>
    <Route path='conocenos' element={<Conocenos/>}></Route>
    <Route path='ventas' element={<Ventas/>}></Route>
  </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
