import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Form} from "./models/Form";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>COUCOU KHALED</p>
      </header>
      <main>
        <section>
          <Form />
        </section>
      </main>
    </div>
  );
}

export default App;
