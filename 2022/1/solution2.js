const elves = input.trim().split("\n\n").map(e => e.split('\n').map(Number).reduce((a,b) => a + b, 0)).sort((a,b) => a-b)
// we want to find the 3 elves with the most calories, so we sort the elves by number of calories

// and then we slice the top 3
return elves.slice(-3).reduce((a, b) => a + b, 0)