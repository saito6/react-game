import React,{useContext} from 'react';

import AppContext from '../contexts/AppContext';

// =============================

const Popup = () => {

  const {open,judge} = useContext(AppContext);

  return (
    <div className={'popup' + (open === true ? ' active' : '')}>
      <p className={judge === true ? 'correct' : ''}>{judge === true ? '正解' : '不正解' }</p>
    </div>
  );
}

export default Popup;
