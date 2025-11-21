import logo from './logo.svg';
import './App.css';
import Hello from './Hello.js';
import Garage from './Garage.js';
import HelloBtn from './HelloBtn.js';
import HelloBtn2 from './HelloBtn2.js';
import HelloBtn3 from './HelloBtn3.js';
import UseStateTest from './UseStateTest.js';
import UseStateTest2 from './UseStateTest2.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          alert2 <code>src/App.js</code> and save to reload.
        </p>
        <Hello name="112233" />
        <Garage />

        <HelloBtn />
        <HelloBtn2 />
        <HelloBtn3 />
        <UseStateTest />
        <UseStateTest2 />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
