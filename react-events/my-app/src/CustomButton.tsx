import React, { FC } from 'react';

interface CustomButtonProps {
  text: string;
  color: string;
  onCustomClick: (text: string) => void;
}

const CustomButton: FC<CustomButtonProps> = ({
  text,
  color,
  onCustomClick,
}) => {
  const buttonStyle: React.CSSProperties = {
    backgroundColor: color,
    color: 'white',
    padding: '10px',
    margin: '5px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  return (
    <button style={buttonStyle} onClick={() => onCustomClick(text)}>
      {text}
    </button>
  );
};

export default CustomButton;
