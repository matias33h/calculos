

import React, { useState } from 'react';

// Define una interfaz para el estado de la calculadora
interface CalculatorState {
  num1: number | '';
  num2: number | '';
  operation: 'suma' | 'resta' | 'multiplicacion' | 'division' | '';
}

function App3() {
  const [calculatorState, setCalculatorState] = useState<CalculatorState>({
    num1: '',
    num2: '',
    operation: '',
  });
  const [result, setResult] = useState<number | string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    setCalculatorState((prevState) => ({
      ...prevState,
      [name]: name === 'num1' || name === 'num2' ? (value === '' ? '' : parseFloat(value)) : (value as 'suma' | 'resta' | 'multiplicacion' | 'division' | ''),
    }));
  };

  const calculate = () => {
    const { num1, num2, operation } = calculatorState;

    if (num1 !== '' && num2 !== '' && operation !== '') {
      let result = 0;

      switch (operation) {
        case 'suma':
          result = num1 + num2;
          break;
        case 'resta':
          result = num1 - num2;
          break;
        case 'multiplicacion':
          result = num1 * num2;
          break;
        case 'division':
          if (num2 !== 0) {
            result = num1 / num2;
          } else {
            setResult('No se puede dividir por cero');
            return; // Evitar que se siga ejecutando el código
          }
          break;
        default:
          setResult('Operación no válida');
          return; // Evitar que se siga ejecutando el código
      }

      setResult(`El resultado es: ${result}`);
    } else {
      setResult('Ingresa números y selecciona una operación primero');
    }
  };

  return (
    <div>
      <h2>Calculadora Simple</h2>
      <div>
        <label htmlFor="num1">Número 1:</label>
        <input
          type="number"
          id="num1"
          name="num1"
          value={calculatorState.num1}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="num2">Número 2:</label>
        <input
          type="number"
          id="num2"
          name="num2"
          value={calculatorState.num2}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="operation">Operación:</label>
        <select
          id="operation"
          name="operation"
          value={calculatorState.operation}
          onChange={handleChange}
        >
          <option value="">Selecciona una operación</option>
          <option value="suma">Suma (+)</option>
          <option value="resta">Resta (-)</option>
          <option value="multiplicacion">Multiplicación (*)</option>
          <option value="division">División (/)</option>
        </select>
      </div>
      <button onClick={calculate}>Calcular</button>
      <br />
      <div id="resultado">
        {typeof result === 'number' ? <p>El resultado es: {result}</p> : <p>{result}</p>}
      </div>
    </div>
  );
}

export default App3;
