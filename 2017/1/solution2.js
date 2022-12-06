const digits = input.trim().split('').map(Number)

let total = 0;

// based on index, get alt index and check that way
digits.map((d, i) => {
  pair = digits[(i + (digits.length / 2)) % digits.length]
  if(pair == d){
    total += d;
  }
})

return total;