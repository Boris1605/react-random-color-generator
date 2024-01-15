import React, { useState } from 'react';

export default function App() {
  const [color, setColor] = useState('#000000');
  const generateColor = () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    setColor(randomColor);
  };

  return (
    <>
      <h1>Random Color Generator</h1>
      <div>
        <div
          style={{ backgroundColor: color, height: '100px', width: '200px' }}
        >
          Generated Color: {color}
        </div>
        <br />
        <button
          onClick={generateColor}
          style={{ borderRadius: '50px', fontSize: '20px', width: '200px' }}
        >
          Generate
        </button>
      </div>
    </>
  );
}
