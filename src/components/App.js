import React,{useState,useEffect} from 'react';

import '../css/reset.css';
import '../css/index.css';

import Game from './Game';
import Info from './Info';
import Popup from './Popup';
import AppContext from '../contexts/AppContext';

import {cardSetf} from '../function/cardSet';
import {answerf} from '../function/answer';

// ========================================

const App = () => {
  var cardSet = cardSetf();// TODO: カードを推すたびに呼び出されちゃってる
  // var r = [2];
  const initialState = {
    cardSet:cardSet,//cardの並び
    answer:answerf(cardSet),//答えの組合せ
    userChoice:[null,null],//userの選択
    floor:1
  }
const [state,setState] = useState(initialState);
const [judge,setJudge] = useState(false);//正解か不正解状態
const [open,setOpen] = useState(false);//表示、非表示

  // console.log(state.userChoice);
  // console.log(state.cardSet);
  // console.log(state.answer);

  useEffect(//floorを参照して変更があったときに正解不正解を識別
    () => {
      if(state.floor == 1){
        setJudge(false);
      }
      else{
        setJudge(true);
      }
    },
    [state.floor],
  );
  // console.log(judge);
  return(
    <AppContext.Provider value={{state,setState,open,setOpen,judge}}>
    <div className="game">
      <div className="inner">
        <Game />
        <Info />
        <Popup />
      </div>
    </div>
    </AppContext.Provider>
  );
}

export default App;
