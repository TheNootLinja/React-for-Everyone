import propTypes from "react";
import logo from './logo.svg';
import './App.css';
import { Counter } from "./Counter.js"


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
      </header>
    </div>
  );
}

// What I am doing below in the arguments of the HelloWorld
// function is destructuring the props object into the
// variables I know will be inside of the object.
function HelloWorld({name, greeting="Hello"}) {
  return (
      <h1>
        {greeting} {name}!
      </h1>
  )
}

HelloWorld.propTypes ={
  name: propTypes.string,
  greeting: propTypes.string,
}

export default App;
