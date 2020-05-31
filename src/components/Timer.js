import React,{useContext} from 'react';

import AppContext from '../contexts/AppContext';


// ================================


const Timer = () => {
  const {timer} = useContext(AppContext);

  return(
    <div className="timer-area">
      {timer}
    </div>
  );
}


export default Timer;
