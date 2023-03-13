const instructions = input.trim().split('')

const directions = {
  '^': [0, 1],
  '>': [1, 0],
  v: [0, -1],
  '<': [-1, 0],
}

// santa coords
let x = 0
let y = 0
// robo-santa coords
let r_x = 0
let r_y = 0

// origin starts w/ 2 presents
const visited = { 0: { 0: 2 } }

const visitCoords = (x, y) => {
  visited[x] = visited[x] || {}
  visited[x][y] = (visited[x][y] || 0) + 1
}

// loop through instructions, keeping track of visited houses
instructions.forEach((instruction, index) => {
  // index: 0 = santa, 1 = robo-santa, 2 = santa, 3 = robo-santa, etc.
  const [_x, _y] = directions[instruction]
  if (index % 2 === 0) {
    x += _x
    y += _y
    visitCoords(x, y)
  } else {
    r_x += _x
    r_y += _y
    visitCoords(r_x, r_y)
  }
})

// get a sum of all visited houses
return Object.keys(visited).reduce((a, b) => {
  return a + Object.keys(visited[b]).length
}, 0)
