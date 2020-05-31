import React,{useContext} from 'react';

import Card from './Card';

import AppContext from '../contexts/AppContext';

// ========================================

const Game = () => {

  const {state} = useContext(AppContext);

  // handleClick(i){
  //   var userAns = this.state.userAns;
  //   userAns[0] = userAns[1];
  //   userAns[1] = i+1;
  //  this.setState({
  //    userAns:userAns,
  //  });
  // }

  return(
    <div className="game-board">
    {state.cardSet.map((imgNum,index)=>(<Card key={index} num={index} imgNum={imgNum} />))}
    </div>
  );
}

export default Game;
