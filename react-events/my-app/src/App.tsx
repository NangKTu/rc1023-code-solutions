import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import React from 'react';
import CustomButton from './CustomButton';

function App() {
  const [count, setCount] = useState(0);

  const handleButtonClick = () => {
    setCount((count) => count + 1);
  };

  const handleCustomClick = (text: string) => {
    window.alert(`CustomButton Clicked! Text: ${text}`);
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={handleButtonClick}>count is {count}</button>
        <CustomButton
          text="Click me!"
          color="blue"
          onCustomClick={handleCustomClick}
        />
        <CustomButton
          text="Submit"
          color="green"
          onCustomClick={handleCustomClick}
        />
        <CustomButton
          text="Explore"
          color="orange"
          onCustomClick={handleCustomClick}
        />
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
