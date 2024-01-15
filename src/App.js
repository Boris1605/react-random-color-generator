import React, { useState } from 'react';

export default function App() {
  // State hook to manage the color state with initial value '#000000'
  const [color, setColor] = useState('#000000');
  // Function to generate a random color and update the state
  const generateColor = () => {
    // Generating a random hexadecimal color code
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    // Updating the color state with the generated color
    setColor(randomColor);
  };

  return (
    <>
      <h1>Random Color Generator</h1>
      <div>
        <div
          style={{
            backgroundColor: color,
            height: '100px',
            width: '200px',
            borderRadius: '10px',
            fontSize: '16px',
            textAlign: 'center',
            paddingTop: '10px',
          }}
        >
          Generated Color: {color}
        </div>
        <br />
        <button
          onClick={generateColor}
          style={{
            borderRadius: '12px',
            fontSize: '20px',
            width: '200px',
            textAlign: 'center',
          }}
        >
          Generate
        </button>
      </div>
    </>
  );
}
