import React, { useState } from 'react';

function SecuenciaFibonacci() {
  const [n, setN] = useState<number>(1);
  const [fibonacci, setFibonacci] = useState<number[]>([]);

  const generarFibonacci = () => {
    if (n <= 0) {
      alert('Por favor, ingresa un número mayor que 0.');
      return;
    }

    const nuevaSecuencia: number[] = [0, 1];

    while (n > nuevaSecuencia.length - 2) {
      const ultimo = nuevaSecuencia[nuevaSecuencia.length - 1];
      const penultimo = nuevaSecuencia[nuevaSecuencia.length - 2];
      nuevaSecuencia.push(ultimo + penultimo);
    }

    setFibonacci(nuevaSecuencia.slice(0, n));
  };

  return (
    <div>
      <h2>Secuencia de Fibonacci</h2>
      <label htmlFor="n">Mostrar los primeros N números:</label>
      <input
        type="number"
        id="n"
        value={n}
        onChange={(e) => setN(parseInt(e.target.value))}
      />
      <button onClick={generarFibonacci}>Generar</button>
      <ul>
        {fibonacci.map((numero, index) => (
          <li key={index}>{numero}</li>
        ))}
      </ul>
    </div>
  );
}

export default SecuenciaFibonacci;
