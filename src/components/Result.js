import React,{useContext} from 'react';
import AppContext from '../contexts/AppContext';

// =====================================

const Result = () => {
  const {start,setStart,result} = useContext(AppContext);

  const handleClickRule = () => {
    setStart(0);
  }
  const handleClickStart = () => {
    setStart(1);
  }

  var paragraph;
  if(result === 1) {
    paragraph = "次は頑張ろうね！";
  }
  else if(result <= 3) {
    paragraph = "もっと頑張って！";
  }
  else if(result <= 5) {
    paragraph = "まだまだいけるよ！";
  }
  else if(result <=10) {
    paragraph = "やりますね〜！";
  }
  else if(result <=20) {
    paragraph = "結構すごいよ！";
  }
  else if(result <= 30) {
    paragraph = "どうしたの？こんなところで終わりかい？";
  }
  else if(result <= 50) {
    paragraph = "よく頑張ったね（笑）";
  }
  else if(result <= 100) {
    paragraph = "遊んでくれてありがとう。";
  }
  else{
    paragraph = "あなたは神だ！！！";
  }

// reroadした時にresultがでないように
  return(
    <div className={'start-modal' + (start === 2 ? '' : ' none') + (result === 0 ? ' hidden' : '')}>
      <p className="title">Animal game!</p>
      <div className="content">
        <p className="head">Result</p>
        <p>{result + '階層まで進めました！'}</p>
        <p>{paragraph}</p>
      </div>
      <a className="button rule" onClick={handleClickRule}>Rule</a>
      <a className="button" onClick={handleClickStart}>Try again</a>
    </div>
  );
}

export default Result;
