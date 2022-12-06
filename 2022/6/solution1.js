const signal = input.trim().split('')
// find first section will all unique characters and return index

for (let n = 3; n <= signal.length; n++) {
  const section = new Set(signal.slice(n - 4, n))
  if (section.size == 4) {
    return n
  }
}
