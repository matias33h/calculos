import React, { useState } from 'react';

const TemperatureConverter: React.FC = () => {
  const [celsius, setCelsius] = useState<string>('');
  const [fahrenheit, setFahrenheit] = useState<string>('');

  const handleCelsiusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCelsius(value);
    const fahrenheitValue = (parseFloat(value) * 9/5) + 32;
    setFahrenheit(fahrenheitValue.toFixed(2));
  };

  const handleFahrenheitChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFahrenheit(value);
    const celsiusValue = (parseFloat(value) - 32) * 5/9;
    setCelsius(celsiusValue.toFixed(2));
  };

  return (
    <div>
      <h2>Convertidor de Temperatura</h2>
      <div>
        <label>Celsius:</label>
        <input type="number" value={celsius} onChange={handleCelsiusChange} />
      </div>
      <div>
        <label>Fahrenheit:</label>
        <input type="number" value={fahrenheit} onChange={handleFahrenheitChange} />
      </div>
    </div>
  );
};

export default TemperatureConverter;
