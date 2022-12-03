const rucksacks = input.trim().split('\n').map(sack => [new Set(sack.slice(0, sack.length / 2).split('')), new Set(sack.slice(sack.length / 2).split(''))])
// split data into rucksacks and compartments using sets (filters unique)
// sack looks like:
// [
//   Set(10) { 'H', 'Z', 'j', 'r', 'w', 'n', 't', 'S', 'D', 'G' },
//   Set(8) { 'd', 'F', 'h', 'C', 'W', 'J', 'n', 'c' }
// ],

const priority = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split('') // index gives us priority

// go through sacks, find common, get priority by index, and reduce
return rucksacks.map(s => [...s[0]].filter(i => s[1].has(i)).map(item => priority.indexOf(item) + 1).reduce((a, b) => a+b, 0)).reduce((a, b) => a+b, 0)