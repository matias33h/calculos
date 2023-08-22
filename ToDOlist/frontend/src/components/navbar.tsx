
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import App3 from './CalculadoraSm';
import ContadorNumeros from './ContadorNum';
import Table from './TableMult';
import Fibonacci from './SecuenciaFibonacci';
import './style.css'



function App2() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container"> {/* Agrega un contenedor para personalizar los estilos */}
          <Link className="navbar-brand" to="/">Calculos</Link>
          {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button> */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/App3">Calculadora Simple</Link>
              </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/ContadorNumeros">Cont Numeros Pares e Impares</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Table">table</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Fibonacci">Fibonacci</Link>
                </li>
            </ul>
          </div>
        </div> {/* Fin del contenedor */}
      </nav>
      <div className="container mt-4">
        <Routes>
          <Route path="/App3" Component={App3} />
          <Route path="/ContadorNumeros" Component={ContadorNumeros} />
          <Route path="/Table" Component={Table} />
          <Route path="/Fibonacci" Component={Fibonacci} />
          {/* Otras rutas aquí si es necesario */}
        </Routes>
      </div>
    </Router>
  );
}

export default App2;
