const ranges = input
  .trim()
  .split('\n')
  .map((pair) => pair.split(',').map((range) => range.split('-').map(Number)))
// we need to check each pair and see if either range overlaps the other

const overlaps = (elf1, elf2) => {
  // filter removes all false, and using length will evaluate to true if 1 true or higher
  return !!elf1.map((edge) => edge >= elf2[0] && edge <= elf2[1]).filter((o) => o).length
}

// check 2ways overlaps
return ranges
  .map((pair) => {
    var [e1, e2] = pair
    return overlaps(e1, e2) || overlaps(e2, e1)
  })
  .filter((c) => c).length
