import React,{useState,useEffect,useContext} from 'react'
import gameContext from '../context';

import { shuffle } from './GameUi';

const WordButton = ({word,reset}) => {
  const {setActivePhrase,activePhrase,newSentence,setSentenceIndex,
    sentenceIndex,setNewSentence,sentenceList,setReset} = useContext(gameContext)
  const [b_active,setB_active] = useState(true);

  useEffect(()=>{
      setB_active(true);
      setActivePhrase([]);
  },[reset]);

  
  const handleClick = ()=>{
      setB_active(!b_active);
      if(b_active){
        setActivePhrase([...activePhrase,word])
      }
      else{
        const newPhrase = activePhrase.filter(eword=> eword.id !== word.id)
        setActivePhrase([...newPhrase])
      }      
  }
  const handleNext = ()=>{
    if(activePhrase.length === newSentence.length ){
          let i;
          let finished = false;
          for(i = 0;i< activePhrase.length;i++){
             if(i === activePhrase.length-1){
                if(i+1 === activePhrase[i].id){
                  finished = true;

                  break;
              }
             }
             else{
                if(i+1 === activePhrase[i].id){
                    continue;

                }
                else{
                    finished = false;
                    break;
                }
             }
             
          }
          if(finished){
             let listLength = sentenceList.length-1;
             let next = sentenceIndex + 1;
             if((sentenceIndex + 1) > listLength){
                next = 0;
             }
             setSentenceIndex(next);
             setActivePhrase([])
             setReset(!reset)
             let sentence = shuffle(sentenceList[next])
             setNewSentence(sentence)
             
          }
      }
  }
  useEffect(()=>{
    handleNext();
  },[activePhrase])
  
  return (
    <React.Fragment>
        <button onClick={()=>{handleClick()}} className={`btn ${b_active?'active-btn':'in-active-btn'}`}>
            {word.word}
        </button>
        {/* {(activePhrase.length === newSentence.length)?(()=>{handleNext()})():false} */}
        </React.Fragment>
  )
}

export default WordButton