return input
  .trim()
  .split('\n')
  .map(Number)
  .map((m) => Math.floor(m / 3) - 2)
  .reduce((a, b) => a + b, 0)
// split input, loops modules through algorithm and sum
