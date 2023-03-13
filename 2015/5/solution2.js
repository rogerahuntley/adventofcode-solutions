const strings = input.trim().split("\n")

// nice strings have:
// pair of two letters that repeat / does not overlap
// one letter that repeats with one letter in between

let totalNiceStrings = 0

for(const string of strings) {
  // pair of two letters that repeat / does not overlap
  const pair = string.match(/(..).*\1/g)
  if(!pair || pair.length == 0){
    continue
  }

  // one letter that repeats with one letter in between
  const letter = string.match(/(.).\1/g)
  if(!letter || letter.length == 0){
    continue
  }

  // passed all tests
  totalNiceStrings++
}

return totalNiceStrings