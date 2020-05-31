export const combine = (imgNum,num) => {
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

  return './img/animal'+com[imgNum][num]+'.png';
}
