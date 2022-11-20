const allNumbers = input.split("\n").slice(0, -1).map(n => Number(n))
// we check all combinations of numbers, looping through all numbers with an offset to avoid repeating combinations

for(let n1 = 0; n1 < allNumbers.length; n1++ ){
  const a = allNumbers[n1];
  for(let n2 = n1+1; n2 < allNumbers.length; n2++ ){
    const b = allNumbers[n2]
    if(a + b == 2020){
      return a * b;
    }
  }
}