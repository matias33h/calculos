
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import App3 from './CalculadoraSm';
import ContadorNumeros from './ContadorNum';
import Table from './TableMult';
import Fibonacci from './SecuenciaFibonacci';
import TemperatureConverter from './TemperatureConverter';
import ContadorPalabras from './ContPalabras';
import './style.css';

function Navbar() {
  return (
    <Router>
      <div className="main-container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <a className="navbar-brand" >
              Calculos
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/App3">
                    Calculadora Simple
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/ContadorNumeros">
                    Contador de Numeros Par e Impar
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Table">
                    Tabla de Multiplicar
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Fibonacci">
                    Fibonacci
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/TemperatureConverter">
                    Convertidor de Temperatura
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/ContadorPalabras">
                    Contador de Palabras
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="container mt-4">
          <Routes>
            <Route path="/App3" element={<App3 />} />
            <Route path="/ContadorNumeros" element={<ContadorNumeros />} />
            <Route path="/Table" element={<Table />} />
            <Route path="/Fibonacci" element={<Fibonacci />} />
            <Route path="/TemperatureConverter" element={<TemperatureConverter />} />
            <Route path="/ContadorPalabras" element={<ContadorPalabras />} />
            {/* Otras rutas aquí si es necesario */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default Navbar;
