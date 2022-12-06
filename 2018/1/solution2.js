const numbers = input.trim().split('\n').map(Number)
// find frequency that repeats after cycling through

const frequencies = new Set([0])
let total = 0;
while(true){
  for(let n of numbers){
    total += n;
    if(frequencies.has(total)){
      return total
    }
    frequencies.add(total)
  }
}