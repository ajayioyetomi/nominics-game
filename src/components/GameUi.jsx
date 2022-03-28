import React,{useContext} from 'react';
import {BsVolumeUpFill as Speaker} from 'react-icons/bs';
import GameContext from '../context';
import contextStore from '../contextStore';

const GameUi = () => {
    const store = useContext(contextStore)
  return (
    <React.Fragment>
        <GameContext.Provider value={store}>
            <section>
                <div>
                    <Speaker/>
                </div>
                <div className='game-div'>
                    <div></div>
                </div>
            </section>
        </GameContext.Provider >
    </React.Fragment>
  )
}

export default GameUi