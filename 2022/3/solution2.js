const rucksacks = input
  .trim()
  .match(/(.+\n){2}.*\n*/g)
  .map((three) => three.split('\n').map((rucksack) => new Set([...rucksack])))

// split rucksacks into groups of 3, and then split rucksacks into their containing items
// set of 3 rucksacks looks like:
// [
//   Set(10) { 'H', 'Z', 'j', 'r', 'w', 'n', 't', 'S', 'D', 'G' },
//   Set(8) { 'd', 'F', 'h', 'C', 'W', 'J', 'n', 'c' },
//   Set(9) { 't', 'g', 'J', 'R', 'G', 'Q', 'c', 'T', 'Z' },
// ],

const priority = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

// go through rucksacks, find common items, get priority by index, and reduce
return rucksacks
  .map((s) =>
    [...s[0]]
      .filter((i) => s[1].has(i) && s[2].has(i))
      .map((item) => priority.indexOf(item) + 1)
      .reduce((a, b) => a + b, 0)
  )
  .reduce((a, b) => a + b, 0)
