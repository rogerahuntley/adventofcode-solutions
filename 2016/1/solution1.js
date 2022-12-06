const directions = input
  .trim()
  .split(', ')
  .map((d) => [d.slice(0, 1), Number(d.slice(1))])
// we'll follow the directions, updating our position and cardinal direction

let [x, y] = [0, 0]
let direction = 0

const cardinal = 'NESW'

// rotate as needed and move forward
directions.map((d) => {
  const [side, distance] = d
  direction += side == 'R' ? 1 : -1
  direction = (4 + direction) % 4 // loops around 0-3
  switch (cardinal[direction]) {
    case 'N':
      y -= distance
      break
    case 'E':
      x += distance
      break
    case 'S':
      y += distance
      break
    case 'W':
      x -= distance
      break
  }
})

return Math.abs(x) + Math.abs(y)
