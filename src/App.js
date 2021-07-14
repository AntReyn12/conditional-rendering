import React, {useState} from "react";
import "./App.css";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to the App!</h1>
        <button onClick={() => setLoggedIn(!loggedIn)}>
          {loggedIn ? "Log out" : "Log in"}
        </button>
        {loggedIn ? (
          <h1>Hello Anthony! Welcome.</h1>
        ) : (
          <h1>Please log in to continue.</h1>
        )}
      </header>
    </div>
  );
}

export default App;
