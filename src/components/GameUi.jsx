import React,{useState,useEffect} from 'react';
import {BsVolumeUpFill as Speaker} from 'react-icons/bs';
import GameContext from '../context';
import WordButton from './WordButton';
import {FaUndoAlt as Redo} from 'react-icons/fa';


export const shuffle = (arg) =>{
  
    const max = arg.length;
    const min = 1;
    const argObj = {};
    const newArr = [];
    const arrlength = arg.length;

    function generateIndex(min,max){
        let genIndex = (Math.floor((Math.random() * max) + min) -1);
        if(newArr.length === arrlength){
            return newArr;
        } 
        else{
            if(argObj[genIndex]){
                return generateIndex(min,max);
            }
            else{
                argObj[genIndex] = arg[genIndex]
                newArr.push(arg[genIndex]);
                return generateIndex(min,max)           
            }  
        }   
        
    }

    return generateIndex(min,max);

}

const List = [
    [
        {id:1,word:"I",active:true},
        {id:2,word:"Brush",active:true},
        {id:3,word:"My",active:true},
        {id:4,word:"Teeth",active:true},
        {id:5,word:"Every",active:true},
        {id:6,word:"Morning",active:true}
    ], [
        {id:1,word:"This",active:true},
        {id:2,word:"is",active:true},
        {id:3,word:"My",active:true},
        {id:4,word:"Brother",active:true},
    ]
];

const GameUi = () => {
    const [sentenceList,setSentenceList] = useState(List);
    const [sentenceIndex,setSentenceIndex] = useState(0);
    const [reset,setReset] = useState(false);
    const [activePhrase,setActivePhrase] = useState([]);
    const [newSentence,setNewSentence] = useState([]);
    const handleReset = () =>{
        setReset(!reset)
        const newPhrase = shuffle(sentenceList[sentenceIndex]);
        setNewSentence(newPhrase)
    }
    useEffect(()=>{
        const newPhrase = shuffle(sentenceList[sentenceIndex]);
        setNewSentence(newPhrase)

    },[sentenceIndex]);

   
    
  return (
    <React.Fragment>
        <GameContext.Provider value={
            {sentenceList,setSentenceList,sentenceIndex,
            setSentenceIndex,reset,setReset,activePhrase,setActivePhrase,
            activePhrase,newSentence,setNewSentence
            }}>
            <section>
                <div>
                    <Speaker/>
                </div>
                <div className='game-div'>
                    <div>
                        <Redo onClick={()=>{handleReset()}}/>
                    </div>
                    <div>
                        {activePhrase.length > 0 && activePhrase.map(eWord=>(
                            <div key={eWord.id}>{eWord.word}</div>
                        ))}
                    </div>
                    <div>
                        {(newSentence.map((eWord)=>(
                            <WordButton key={eWord.id} word={eWord} reset={reset} />
                        )))}

                    </div>
                </div>
            </section>
        </GameContext.Provider >
    </React.Fragment>
  )
}

export default GameUi