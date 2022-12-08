const depths = input.trim().split('\n').map(Number)
// count depths where increases compare to last

let total = 0
let last = depths.at(0)
depths.forEach((d) => {
  if (d > last) {
    total += 1
  }
  last = d
})

return total
