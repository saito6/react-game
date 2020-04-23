import React,{useContext} from 'react';

import AppContext from '../contexts/AppContext';

// ========================================


const Card = ({imgNum,num}) => {

  const {state,setState} = useContext(AppContext);

  // var cards02 = ['01a','01b','02a','02b','03a','03b'];
  var cards = ['05a','05b','06a','06b','07a','07b'];

  const length = cards.length;

 var com = [30];
 for(var r=0;r<30;r++){
   com[r] = [2];//配列に配列を入れて2次元配列を作成
 }
 r=0;
 for(var s=0;s<length;s++){//rは0~14で動く
   for(var t=s+1;t<length;t++){
       com[r][0] = cards[s];
       com[r][1] = cards[t];
       r++;
   }
 }
 for(r=0;r<15;r++){//反転
   com[r+15][0] = com[r][1]
   com[r+15][1] = com[r][0]
 }
 // console.log(com[10][1]);

   var imgurl01 = '/img/animal'+com[imgNum][0]+'.png';
   var imgurl02 = '/img/animal'+com[imgNum][1]+'.png';

const handleClickUserChoice = () => {
  if(state.userChoice[0] !== num){
    var a = state.userChoice[0];
    setState({
      cardSet:state.cardSet,
      answer:state.answer,
      userChoice:[num,a],
      floor:state.floor
    });

    console.log(state.userChoice[0]);
    console.log(state.userChoice[1]);
    // console.log(state.userChoice[0] === 11 || state.userChoice[1] === 11);
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
