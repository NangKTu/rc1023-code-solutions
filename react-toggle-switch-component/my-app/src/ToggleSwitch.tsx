import { useState } from 'react';
import './ToggleSwitch.css';

export function ToggleSwitch() {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn((prevIsOn) => !prevIsOn);
    document.body.style.backgroundColor = isOn ? 'white' : 'lightblue';
  };

  return (
    <div className="toggle-container">
      <div
        className={`toggle-switch ${isOn ? 'on' : 'off'}`}
        onClick={handleToggle}>
        <div className="toggle-slider"></div>
      </div>
      <span className="toggle-label">{isOn ? 'ON' : 'OFF'}</span>
    </div>
  );
}
