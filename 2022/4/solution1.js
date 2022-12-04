const ranges = input
  .trim()
  .split('\n')
  .map((pair) => pair.split(',').map((range) => range.split('-').map(Number)))
// we need to check each pair and see if either range contains the other

const contains = (elf1, elf2) => {
  // arguments: [ 2, 4 ], [ 6, 8 ]
  return elf1[0] <= elf2[0] && elf1[1] >= elf2[1]
}

// check 2ways contains
return ranges
  .map((pair) => {
    var [e1, e2] = pair
    return contains(e1, e2) || contains(e2, e1)
  })
  .filter((c) => c).length
