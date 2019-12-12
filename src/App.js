import React from 'react';
import './App.css';
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="containerinput">
        <div className="inputcenter">
          <input type="text" placeholder="Digite seu pokémon"/>
        </div>
      </div>
      <PokeRow/>
    </div>
  );
}

export default App;
