const data = input.trim().split('\n').map(Number)
// we want to find the number where the sum cannot be found from any 2 numbers of the premble length before it

const preambleLength = 25

// gets all the valid numbers past the offset (so starts with the lowest possible number)
const numbers = data.slice(preambleLength)

const doesSum = (offset) => {
  const preamble = data.slice(offset, preambleLength + offset)
  const number = numbers[offset]
  for (let n1i = 0; n1i < preamble.length; n1i++) {
    for (let n2i = n1i + 1; n2i < preamble.length; n2i++) {
      const n1 = preamble[n1i],
        n2 = preamble[n2i]
      if (n1 + n2 == number) {
        return true
      }
    }
  }
  return false
}

for (const n in numbers) {
  if (!doesSum(n)) {
    return numbers[n]
  }
}
