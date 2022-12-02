const elves = input.trim().split("\n\n").map(e => e.split('\n').map(Number).reduce((a,b) => a + b, 0)).sort((a,b) => a-b)
// we want to find the elf with the most calories, so we sort the elves by number of calories

return elves.at(-1)