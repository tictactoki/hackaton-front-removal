import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Form} from "./models/Form";

var Reason = class {
    constructor(name, value) {
        this.name = name;
        this.value = value;
    }
}

const reasons = [
    new Reason("trust","Je n'ai pas confiance dans le traitement de mes données personnelles"),
    new Reason("unknown","Je ne sais pas à quoi servent mes données donc je préfère demander leur suppression"),
    new Reason("sub","Je suis inscrit à une liste de communication à laquelle je n'ai jamais souscrit"),
    new Reason("spam", "Je reçois trop d'email/sms")
]

function App() {
  return (
    <div className="App">
      <main>
        <section>
          <Form reasons={reasons}/>
        </section>
      </main>
    </div>
  );
}

export default App;
