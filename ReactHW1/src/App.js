import logo from "./logo.svg";
import "./App.css";
import { getUser, getPost } from "./User";

function App() {
  getUser(1).then((data) => console.log("userData: ", data));
  getPost(1).then((data) => console.log("postData: ", data));
  return (
    <div className="App">
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
