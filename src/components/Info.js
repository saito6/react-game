import React,{useContext} from 'react';

import AppContext from '../contexts/AppContext';

import {cardSetf} from '../function/cardSet';
import {answerf} from '../function/answer';

// ========================================

const Info = () => {

  const {state,setState} = useContext(AppContext);

  const handleClickanswer = () => {
    var cardSet = cardSetf();
    if(state.answer[0]+state.answer[1] === state.userChoice[0]+state.userChoice[1] && state.answer[0]*state.answer[1] === state.userChoice[0]*state.userChoice[1]){
      setState({
        cardSet:cardSet,
        answer:answerf(cardSet),
        userChoice:[11,11],
        floor:state.floor+1 // TODO: もっと単純化
      });
    }
    else{
      setState({// TODO: もっと簡単にstateをリセットしたい
        cardSet:cardSet,
        answer:answerf(cardSet),
        userChoice:[11,11],
        floor:1
      });
    }
  }

  return(
    <div className="game-info">
      <div className="answer">
        <p className="answer_head">答えはこちら</p>
        <p><span className="ans_num">{state.answer[0]+1}</span>と<span className="ans_num">{state.answer[1]+1}</span>
        </p>
      </div>

      <div className="submit-area">
        <button disabled={state.userChoice[0] === 11 || state.userChoice[1] === 11} onClick={handleClickanswer}>決定</button>
      </div>
      <div className="floor-area">
        <p>{state.floor}階層</p>
      </div>
    </div>
  );
}

export default Info;
