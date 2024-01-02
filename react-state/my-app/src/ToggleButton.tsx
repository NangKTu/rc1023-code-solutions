import React, { useState } from 'react';

interface ToggleButtonProps {
  text: string;
  color: string;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({ text, color }) => {
  const [isClicked, setIsClicked] = useState(false);

  console.log('value returned by useState:', isClicked);

  const handleClick = () => {
    console.log('Value before calling the setter:', isClicked);

    setIsClicked(!isClicked);
  };

  const buttonStyle: React.CSSProperties = {
    backgroundColor: isClicked ? 'green' : color,
    color: 'white',
    padding: '10px',
    margin: '5px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  return (
    <button style={buttonStyle} onClick={handleClick}>
      {isClicked ? 'Clicked!' : text}
    </button>
  );
};

export default ToggleButton;
