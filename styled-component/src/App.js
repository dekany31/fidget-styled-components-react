
import React, { useState } from 'react';
import './App.css';
import Button from './components/Button.jsx';
import Counter from './components/Counter.jsx';

function App() {
  const initialButtonText = 'Click me!';
  const loserButtonText = 'Loser';

  const [buttons, setButtons] = useState(Array(5).fill(initialButtonText));//5 elemű tömböt hoz létre 'Click me!'

  const handleClick = (index) => {
    if (buttons[index] === initialButtonText) {
      const winnerIndex = Math.floor(Math.random() * buttons.length);//véletlenszerű egész számot kapunk 0 és buttons.length - 1 között.

      setButtons((prevButtons) =>//buttons állapotát frissíti
        prevButtons.map((button, i) =>
          i === winnerIndex ? initialButtonText : loserButtonText
        )
      );
    }
  };

  return (
    <div className="App">
      <div className='grid_item'>
        {buttons.map((buttonText, index) => (
          <Button bigger key={"key_" + index} onClick={() => handleClick(index)}>
            {buttonText}
          </Button>
        ))}
      </div >
      <div className='grid_item'>
        <Counter />
      </div>
    </div >
  );
}

export default App;
