import React,{useEffect} from 'react';
import './App.css';
import GameUi from './components/GameUi';
import InstructionUi from './components/InstructionUi';


function App() {
 
  useEffect(()=>{
    
  },
  [])
  return (
    <React.Fragment>
      {/* <header title="head">Hello World</header> */}
      <section title="app" className='game-section'>
        <InstructionUi />
        <GameUi />

      </section>

    </React.Fragment>
  );
}

export default App;
