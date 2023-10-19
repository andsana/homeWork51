import Ball from './Ball';
import './App.css';
import {useState} from 'react';

const generateNumbers = () => {
  const newNumbers: number[] = [];
  while (newNumbers.length < 5) {
    const randomNumber = Math.floor(Math.random() * 32) + 5;

    if (!newNumbers.includes(randomNumber)) {
      newNumbers.push(randomNumber);
    }
  }
  newNumbers.sort((a, b) => a - b);
  return newNumbers;
};

function App() {
  const initialNumbers = [5, 11, 16, 23, 32];
  const [numbers, setNumbers] = useState(initialNumbers);

  const handleNewNumbers = () => {
    const newNumbers = generateNumbers();
    setNumbers(newNumbers);
  };

  return (
    <div>
      <div className="balls">
        {numbers.map((el) => (
          <Ball number={el} key={el}/>
        ))}
      </div>
      <button className="button" onClick={handleNewNumbers}>New numbers</button>
    </div>
  );
}

export default App;
