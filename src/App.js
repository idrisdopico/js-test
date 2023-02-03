import { useValidator } from "./js/useValidator";
import {
  barObj,
  barObjF,
  barSchema,
  carObj,
  carObjF,
  carSchema,
  personObj,
  personObjF,
  personSchema
} from "./examples/examples";

import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          js-test
        </p>
      </header>
      <div>
        <h4>barSchema</h4>
        <p>Resultaat van barObj: {useValidator(barSchema, barObj).toString()}</p>
        <p>Resultaat van barObjF: {useValidator(barSchema, barObjF).toString()}</p>
      </div>
      <div>
        <h4>carSchema</h4>
        <p>Resultaat van carObj: {useValidator(carSchema, carObj).toString()}</p>
        <p>Resultaat van carObjF: {useValidator(carSchema, carObjF).toString()}</p>
      </div>
      <div>
        <h4>personSchema</h4>
        <p>Resultaat van personObj: {useValidator(personSchema, personObj).toString()}</p>
        <p>Resultaat van personObjF: {useValidator(personSchema, personObjF).toString()}</p>
      </div>
    </div>
  );
}

export default App;
