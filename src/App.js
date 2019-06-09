import React from 'react';
import './App.css';
import Title from './components/Title.js'
import Scoreboard from './components/Scoreboard.js';

function App() {
  return (
    <div className="App">
      <main>
        <Title content='Scoreboard React-App'/>
        <Scoreboard />
      </main>
    </div>
  );
}

export default App;
