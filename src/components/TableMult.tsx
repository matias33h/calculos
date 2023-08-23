import React, { useState } from 'react';

function TablaMultiplicar() {
  const [numero, setNumero] = useState<number>(1);
  const [limite, setLimite] = useState<number>(10);
  const [tabla, setTabla] = useState<number[]>([]);

  const generarTabla = () => {
    const nuevaTabla: number[] = [];
    for (let i = 1; i <= limite; i++) {
      nuevaTabla.push(numero * i);
    }
    setTabla(nuevaTabla);
  };

  return (
    <div>
      <h2>Tabla de Multiplicar</h2>
      <label htmlFor="numero">Número:</label>
      <input
        type="number"
        id="numero"
        value={numero}
        onChange={(e) => setNumero(parseInt(e.target.value))}
      />
      <label htmlFor="limite">Límite:</label>
      <input
        type="number"
        id="limite"
        value={limite}
        onChange={(e) => setLimite(parseInt(e.target.value))}
      />
      <button onClick={generarTabla}>Generar</button>
      <table>
        <thead>
          <tr>
            <th>Multiplicando</th>
            <th>Resultado</th>
          </tr>
        </thead>
        <tbody>
          {tabla.map((resultado, index) => (
            <tr key={index}>
              <td>{numero} x {index + 1}</td>
              <td>{resultado}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TablaMultiplicar;
