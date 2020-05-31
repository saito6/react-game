import React,{useContext} from 'react';
import AppContext from '../contexts/AppContext';

// =====================================

const Start = () => {
  const {start,setStart} = useContext(AppContext);

  const handleClickStart = () => {
    setStart(1);
  }

  return(
    <div className={'start-modal' + (start === 0 ? '' : ' none')}>
      <p className="title">Animal game!</p>
      <div className="content">
        <p>このサイトは、<a className="twitter-link" href="https://twitter.com/roxasBazooka" target="_blank" rel="noopener noreferrer">saito</a>がReactの学習兼ポートフォリオとして作成したゲームです。</p>
        <p className="head">ルール説明</p>
        <ol>
          <li>10枚のカードが並んでいます。1組(2枚)だけ同じ動物の組み合わせのカードがあるので選択してください。</li>
          <li>2枚のカードを選択したら、下に決定ボタンがあるので押してください。</li>
          <li>正解すると次の階層に進みます。つまり、どれだけ奥の階層に進めるかを競うゲームです。</li>
          <li>サイト内で秒数がカウントダウンされていますが、それが一階層毎の制限時間です。</li>
          <li>制限時間切れ、もしくは決定ボタンを押して不正解になった場合にゲームが終了します。</li>
        </ol>
      </div>
      <a className="button" onClick={handleClickStart}>START</a>
    </div>
  );
}

export default Start;
