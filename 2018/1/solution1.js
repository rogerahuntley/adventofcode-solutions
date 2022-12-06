return input
  .trim()
  .split('\n')
  .map(Number)
  .reduce((a, b) => a + b, 0)
// just sum all numbers
