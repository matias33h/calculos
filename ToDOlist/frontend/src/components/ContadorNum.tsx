import React, { useState } from 'react';

function ContadorNumeros() {
  const [inicio, setInicio] = useState('');
  const [fin, setFin] = useState('');
  const [numerosPares, setNumerosPares] = useState(0);
  const [numerosImpares, setNumerosImpares] = useState(0);

  const contarParesImpares = () => {
    const start = parseInt(inicio);
    const end = parseInt(fin);

    if (!isNaN(start) && !isNaN(end)) {
      let paresCount = 0;
      let imparesCount = 0;

      for (let i = start; i <= end; i++) {
        if (i % 2 === 0) {
          paresCount++;
        } else {
          imparesCount++;
        }
      }

      setNumerosPares(paresCount);
      setNumerosImpares(imparesCount);
    }
  };

  return (
    <div>

      <h2> Cont Números Pares e Impares</h2>
      <input
        placeholder="Inicio"
        onChange={(e) => setInicio(e.target.value)}
        value={inicio}
      />
      <input
        placeholder="Fin"
        onChange={(e) => setFin(e.target.value)}
        value={fin}
      />
      <button onClick={contarParesImpares}>Contar</button>
      <p>Números Pares: {numerosPares}</p>
      <p>Números Impares: {numerosImpares}</p>
    </div>
  );
}

export default ContadorNumeros;
