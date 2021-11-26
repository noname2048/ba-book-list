import "./App.css";

import TodoApp from "./components/TodoApp";
import logo from "./logo.svg";
import styles from "./App.module.css";

function App() {
  return (
    <div className="App">
      <TodoApp></TodoApp>
      <h1 style={styles.title}>Welcom back!</h1>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
