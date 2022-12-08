const depths = input.trim().split('\n').map(Number)
// count depths where increases compare to last

// merge sliding window of 3
const merged = depths.slice(0, -2).map((d, i) => depths.slice(i, i + 3).reduce((a, b) => a + b, 0))

// check merged
let total = 0
let last = merged.at(0)
merged.forEach((d) => {
  if (d > last) {
    total += 1
  }
  last = d
})

return total
