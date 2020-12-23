import logo from './logo.svg';
import React from 'react';
import './App.css';

// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }
function Greeting() {
  return (
      <div>
        <h1>Greeting function called</h1>
      </div>
  );
}

function Greeting2(props) {
  return (
      <div>
        <h1>props test ~~ { props.name }</h1>
      </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-custom">용고니용고니용고니</h1>
        <p>
          오키도키요
          {/*추가*/}
          <Greeting/>
          <Greeting2 name={"mbj"}/>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          링크걸기
        </a>
      </header>
    </div>
  );
}

export default App;
