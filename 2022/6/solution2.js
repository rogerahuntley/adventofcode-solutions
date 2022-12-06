const signal = input.trim().split('')
// find first section will all unique characters and return index

for (let n = 13; n <= signal.length; n++) {
  const section = new Set(signal.slice(n - 14, n))
  if (section.size == 14) {
    return n
  }
}
