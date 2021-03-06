import React from 'react';
import './App.css';
import GameUi from './components/GameUi';
import InstructionUi from './components/InstructionUi';

function App() {
  return (
    <React.Fragment>
      <section className='game-section'>
        <InstructionUi />
        <GameUi />

      </section>

    </React.Fragment>
  );
}

export default App;
