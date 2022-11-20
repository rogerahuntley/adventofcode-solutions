const allNumbers = input.split("\n").slice(0, -1).map(n => Number(n))
for(let n1 = 0; n1 < allNumbers.length; n1++ ){
  const a = allNumbers[n1];
  for(let n2 = n1+1; n2 < allNumbers.length; n2++ ){
    const b = allNumbers[n2]
    for(let n3 = n2 + 1; n3 < allNumbers.length; n3++ ){
      const c = allNumbers[n3]
      if(a + b + c == 2020){
        return a * b * c;
      }
    }
  }
}