const directions = input
  .trim()
  .split(', ')
  .map((d) => [d.slice(0, 1), Number(d.slice(1))])
// we'll follow the directions, updating our position and cardinal direction

let [x, y] = [0, 0]
let direction = 0

const cardinal = 'NESW'

// check and see if we've been at a coord before
const coords = {}
const visited = (coord) => {
  const [x, y] = coord
  coords[x] ||= []
  if (coords[x].includes(y)) {
    return true
  }
  coords[x].push(y)
  return false
}

let final

for (let d of directions) {
  const [side, distance] = d
  direction += side == 'R' ? 1 : -1
  direction = (4 + direction) % 4 // loops around 0-3
  // we have to calculate intersections so lets just check every step :)
  for (let n = 0; n < distance; n++) {
    switch (cardinal[direction]) {
      case 'N':
        y -= 1
        break
      case 'E':
        x += 1
        break
      case 'S':
        y += 1
        break
      case 'W':
        x -= 1
        break
    }
    if (visited([x, y])) {
      return Math.abs(x) + Math.abs(y)
    }
  }
}
