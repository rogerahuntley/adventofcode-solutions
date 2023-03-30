const strings = input.trim().split('\n')

// nice strings have:
// 3 vowels
// one letter that repeats
// no bad strings

let totalNiceStrings = 0

for (const string of strings) {
  // 3 vowels
  const vowels = string.match(/a|e|i|o|u/g)
  if (!vowels || vowels.length < 3) {
    continue
  }

  // one letter that repeats
  const letter = string.match(/(.)\1/g)
  if (!letter || letter.length == 0) {
    continue
  }

  // no bad strings
  const badString = string.match(/ab|cd|pq|xy/g)
  if (badString && badString.length > 0) {
    continue
  }

  // passed all tests
  totalNiceStrings++
}

return totalNiceStrings
