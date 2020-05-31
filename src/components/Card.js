import React,{useContext} from 'react';

import AppContext from '../contexts/AppContext';

import {combine} from '../function/combine';

// ========================================


const Card = ({imgNum,num}) => {

  const {state,setState,start} = useContext(AppContext);

  var imgurl01 = combine(imgNum,0);
  var imgurl02 = combine(imgNum,1);

const handleClickUserChoice = () => {
  if(start === 1){
    let first = state.userChoice[0];
    let second = state.userChoice[1];

    if(first === num){
      setState({
        cardSet:state.cardSet,
        answer:state.answer,
        userChoice:[second,null],
        floor:state.floor
      });
    }
    else {//被らないように
      setState({
        cardSet:state.cardSet,
        answer:state.answer,
        userChoice:[num,first],
        floor:state.floor
      });
      // console.log(first);
      // console.log(second);
    }
    if(second === num){
      setState({
        cardSet:state.cardSet,
        answer:state.answer,
        userChoice:[first,null],
        floor:state.floor
      });
    }
  }
}

  return(
    <div className={'card' + (state.userChoice[0] === num || state.userChoice[1] === num ? ' active' : '')} onClick={handleClickUserChoice}>
      <div className="card-num">{num+1}</div>
      <div className="animal-set">
        <p className="animal">
          <img src={imgurl01} alt="動物" />
        </p>
        <p className="animal">
          <img src={imgurl02} alt="動物" />
        </p>
      </div>
    </div>
  );
}

export default Card;
