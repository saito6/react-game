export const answerf = (choice) => {
  //答えの組み合わせを返す関数
  var answer =[2];
  for(var s=0;s<10;s++){
    for(var t=s+1;t<10;t++){
      if(choice[s] == choice[t]){
        answer[0] = s;
        answer[1] = t;
        return answer;
      }
    }
  }
}
