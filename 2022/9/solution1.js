const instructions = input
  .trim()
  .split('\n')
  .map((d) => d.split(' '))
  .map((d) => [d[0], Number(d[1])])

const directions = {
  R: [0, 1],
  U: [1, 0],
  L: [0, -1],
  D: [-1, 0],
}

// dynamic rope length
const rope = Array(2)
  .fill()
  .map(() => [0, 0])

const moveHead = (coords) => {
  // head can just move, no restrictions
  const head = rope.at(0)
  head[0] += coords[0]
  head[1] += coords[1]
  moveTail(1, coords)
}

const tailCount = []

const moveTail = (index) => {
  // tail follows the index before it
  const head = rope[index - 1]
  const tail = rope[index]

  const diff = [head[0] - tail[0], head[1] - tail[1]]
  const distance = Math.sqrt(diff[0] ** 2 + diff[1] ** 2)

  // the 1.5 covers the diagonal case
  if (distance > 1.5) {
    tail[0] += Math.sign(diff[0]) * Math.min(Math.abs(diff[0]), 1)
    tail[1] += Math.sign(diff[1]) * Math.min(Math.abs(diff[1]), 1)
  }
  if (index + 1 < rope.length) {
    moveTail(index + 1)
  }
}

let totalStops = 0

const countTail = (tail) => {
  tailCount[tail[0]] ||= []
  tailCount[tail[0]][tail[1]] ||= 0
  if (tailCount[tail[0]][tail[1]] == 0) {
    totalStops++
    tailCount[tail[0]][tail[1]] = 1
  }
}

for (const instruction of instructions) {
  const [dirAlias, count] = instruction
  const dir = directions[dirAlias]
  for (let n = 0; n < count; n++) {
    moveHead(dir)
    // count total times visited a space
    countTail(rope.at(-1))
  }
}

return totalStops
