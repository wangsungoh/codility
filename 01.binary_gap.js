function solution(N) {
  let result = 0;
  let max = 0;
  const binaryArray = N.toString(2);
  
  for(let i = 0; i <  binaryArray.length; i++) {
    if (binaryArray[i] === '0') {
      result += 1;
    } else {
      max = max <= result ? result : max;
      result = 0;
    }
  }
  
  return max;
}

solution(1041);
