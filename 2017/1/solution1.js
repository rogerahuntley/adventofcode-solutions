const digits = input.trim().split('').map(Number)

// start with last digit
let last = digits.at(-1)
let total = 0

// loop through all and sum matches
digits.map((d) => {
  if (last == d) {
    total += d
  }
  last = d
})

return total
