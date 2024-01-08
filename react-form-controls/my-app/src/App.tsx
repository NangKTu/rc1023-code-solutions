import './App.css';
import { RegistrationFormUncontrolled } from './RegistrationFormUncontrolled';
import { RegistrationFormControlled } from './RegistrationFormControlled';

function App() {
  return (
    <div>
      <h1>Registration Form (Uncontrolled)</h1>
      <RegistrationFormUncontrolled />

      <h1>Registration Form (Controlled)</h1>
      <RegistrationFormControlled />
    </div>
  );
}

export default App;
