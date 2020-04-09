import React,{useState} from 'react';

import '../css/reset.css';
import '../css/index.css';

import Game from './Game';
import Info from './Info';
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
    userChoice:[11,11],//userの選択
    floor:1
  }
const [state,setState] = useState(initialState);

  console.log(state.userChoice);
  console.log(state.cardSet);
  console.log(state.answer);

  return(
    <AppContext.Provider value={{state,setState}}>
    <div className="game">
      <div className="inner">
        <Game />
        <Info />
      </div>
    </div>
    </AppContext.Provider>
  );
}

export default App;

  // func(e){
  //   this.setState({
  //     colorToggle: !this.state.colorToggle,
  //   });
  // }
