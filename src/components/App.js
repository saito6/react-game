import React,{useState,useEffect} from 'react';

import '../css/reset.css';
import '../css/index.css';

import Header from './Header';
import Game from './Game';
import Info from './Info';
import Popup from './Popup';
import Start from './Start';
import Result from './Result';
import AppContext from '../contexts/AppContext';

import {cardSetf} from '../function/cardSet';
import {answerf} from '../function/answer';

// ========================================

export var timerArray = new Array();//外に出すことによってstateを即時反映できる

const App = () => {
  var cardSet = cardSetf();// TODO: カードを推すたびに呼び出されちゃってる
  const initialState = {
    cardSet:cardSet,//cardの並び
    answer:answerf(cardSet),//答えの組合せ
    userChoice:[null,null],//userの選択
    floor:1
  }
const [state,setState] = useState(initialState);
const [judge,setJudge] = useState(false);//正解か不正解状態
const [open,setOpen] = useState(false);//表示、非表示
const [timer,setTimer] = useState(20);
const [start,setStart] = useState(0);//0の時start-modal表示、1の時ゲーム中、2の時result画面表示
const [result,setResult] = useState(0);

let count;
const timerf = () => {
  console.log('配列数:'+timerArray.length);
  console.log('timer'+timer);
  count = timer;
  const promise = new Promise((resolve) => {
    timerArray.push(setInterval(() => {
      console.log('配列数:'+timerArray.length);
      count--;
      setTimer(count);
      console.log(count,timer);
      if(count === 0) {
        resolve();
        console.log('配列数:'+timerArray.length);
        setTimeout(() => {//1秒後に時間切れでリセット
          setStart(2);
          setTimer(20);
          setResult(state.floor);
          console.log('timer:'+timer);
          setState({
            cardSet:cardSet,
            answer:answerf(cardSet),
            userChoice:[null,null],
            floor:1
          });
          setOpen(true);
          setTimeout(setOpen,1000,false);
        }, 1000);
      }
    }, 1000));
  });
  promise.then(() => {
    console.log('clear');
    //タイマーを止める
    clearInterval(timerArray.shift());
  });
}
  useEffect(//floorを参照して変更があったときに正解不正解を識別
    () => {
      if(state.floor === 1){
        setJudge(false);
      }
      else{
        setJudge(true);
      }
    },
    [state.floor]
  );

  useEffect(//timer
    () => {
      if(start === 1) {
        if(timer === 20){
          console.log('timerf:'+timer);
          timerf();
        }
      }
    },[timer,start]
  );

  return(
    <AppContext.Provider value={{state,setState,open,setOpen,judge,timer,setTimer,start,setStart,result,setResult}}>
    <Start />
    <Result />
    <Header />
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
