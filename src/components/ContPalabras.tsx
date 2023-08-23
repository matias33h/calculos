import React, { useState } from 'react';

enum ErrorMessages {
  ContainsNumbers = "La oración no debe contener números."
}

const ContadorPalabras: React.FC = () => {
  const [sentence, setSentence] = useState<string>('');
  const [wordCount, setWordCount] = useState<number>(0);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSentence(value);
    const words = value.trim().split(/\s+/);

    if (/\d/.test(value)) {
      setErrorMessage(ErrorMessages.ContainsNumbers);
    } else {
      setErrorMessage(null);
    }

    if (value.trim() === '') {
      setWordCount(0);
    } else {
      setWordCount(words.length);
    }
  };

  return (
    <div>
      <h2>Contador de Palabras</h2>
      <div>
        <label>Ingresa una oración:</label>
        <input type="text" value={sentence} onChange={handleInputChange} />
      </div>
      <div>
        {errorMessage ? (
          <p className="error">{errorMessage}</p>
        ) : (
          <p>Cantidad de palabras: {wordCount}</p>
        )}
      </div>
    </div>
  );
};

export default ContadorPalabras;
