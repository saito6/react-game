 export const cardSetf = () => {
   //30個の数から1つのみ重複するという条件で10個の配列を取り出す関数
  var arr30 = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29];// TODO: もっと簡潔に
  // console.log(arr30);

  //シャッフルアルゴリズム
  var a = arr30.length;
  while (a) {
    var j = Math.floor( Math.random() * a );
    var t = arr30[--a];
    arr30[a] = arr30[j];
    arr30[j] = t;
  }
  // console.log(arr30);

  //先頭9個の数をcardcopyに入れる
    var cardcopy = [9];
    var k = 0;
  while(k<9){
    cardcopy[k] = arr30[k];
    k++;
  }
  //ランダムで一個追加(最初のを最後に付け足している)
  cardcopy.push(cardcopy[0]);
  //シャッフルアルゴリズム
  a = cardcopy.length;
  while (a) {
     j = Math.floor( Math.random() * a );
     t = cardcopy[--a];
    cardcopy[a] = cardcopy[j];
    cardcopy[j] = t;
  }

  // console.log(cardcopy);
  return cardcopy;
}
