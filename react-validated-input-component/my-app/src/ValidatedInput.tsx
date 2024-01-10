import { useState, ChangeEvent } from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';
import './ValidatedInput.css';

const ValidatedInput: React.FC = () => {
  const [password, setPassword] = useState<string>('');
  const [showIcon, setShowIcon] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newPassword: string = e.target.value;
    setPassword(newPassword);
    setShowIcon(true);
  };

  const renderValidationIcon = () => {
    if (password.length === 0) {
      return (
        <>
          <FaTimes className="error-icon" />
          <div className="error-message">Password is required</div>
        </>
      );
    } else if (password.length < 8) {
      return (
        <>
          <FaTimes className="error-icon" />
          <div className="error-message">
            Password must be at least 8 characters
          </div>
        </>
      );
    } else {
      return <FaCheck className="success-icon" />;
    }
  };

  return (
    <div className="validated-input-container">
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        name="password"
        value={password}
        onChange={handleChange}
      />
      <div className="icon-container">{showIcon && renderValidationIcon()}</div>
    </div>
  );
};

export default ValidatedInput;
