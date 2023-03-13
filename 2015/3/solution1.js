const instructions = input
  .trim()
  .split('')

const directions = {
  '^': [0, 1],
  '>': [1, 0],
  'v': [0, -1],
  '<': [-1, 0],
}

// santa coords
let x = 0
let y = 0

// origin starts w/ a present
const visited = { 0: { 0: 1 } }

// loop through instructions, keeping track of visited houses
instructions.forEach((instruction) => {
  const [_x, _y] = directions[instruction]
  x += _x
  y += _y
  visited[x] = visited[x] || {}
  visited[x][y] = (visited[x][y] || 0) + 1
})

// get a sum of all visited houses
return Object.keys(visited).reduce((a, b) => {
  return a + Object.keys(visited[b]).length
}, 0)