import React from 'react';

type Props = {
  text: string;
  color: string;
};

export function CustomButton({ text, color }: Props) {
  return (
    <button
      style={{
        backgroundColor: color,
        color: 'white',
        padding: '10px 15px',
        border: 'none',
        borderRadius: '5px',
      }}>
      {text}
    </button>
  );
}
