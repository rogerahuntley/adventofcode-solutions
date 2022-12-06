return input
  .trim()
  .split('')
  .map((a) => (a == '(' ? 1 : -1))
  .reduce((a, b) => a + b, 0)
// split, convert directions to numbers, and sum
