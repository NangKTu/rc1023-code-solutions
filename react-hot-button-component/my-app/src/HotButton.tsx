import { useState } from 'react';

export default function HotButton() {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    if (clickCount >= 22) {
      setClickCount(0); // Reset to zero when clickCount reaches 22
    } else {
      setClickCount((prevClickCount) => prevClickCount + 1);
    }
  };

  let buttonStyle: React.CSSProperties = {
    fontSize: '16px',
    padding: '10px',
    border: 'none',
    cursor: 'pointer',
    transition: 'background-color 0.3s, color 0.3s',
  };

  if (clickCount < 3) {
    buttonStyle = { backgroundColor: 'black', color: 'white' };
  } else if (clickCount === 3) {
    buttonStyle = { backgroundColor: 'darkblue', color: 'white' };
  } else if (clickCount <= 6) {
    buttonStyle = { backgroundColor: 'lightpurple', color: 'white' };
  } else if (clickCount <= 9) {
    buttonStyle = { backgroundColor: 'lightcoral', color: 'white' };
  } else if (clickCount <= 12) {
    buttonStyle = { backgroundColor: 'orange', color: 'black' };
  } else if (clickCount <= 15) {
    buttonStyle = { backgroundColor: 'yellow', color: 'black' };
  } else if (clickCount <= 18) {
    buttonStyle = { backgroundColor: 'white', color: 'black' };
  }

  return (
    <button className="hot-button" style={buttonStyle} onClick={handleClick}>
      Click me ({clickCount})
    </button>
  );
}
