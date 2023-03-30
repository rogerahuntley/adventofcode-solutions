const instructions = input
  .trim()
  .split('\n')
  .map((line) => line.split(' '))
  .map((line) => {
    let instruction, a, b
    // could be toggle, turn on or turn off, we just need on/off/toggle
    if (line[0] == 'turn') {
      line.shift()
    }
    // inst a through b
    instruction = line[0]
    a = line[1].split(',').map(Number)
    b = line[3].split(',').map(Number)
    return { instruction, a, b }
  })

const lights = Array(1000)
  .fill()
  .map(() => Array(1000).fill(false))

// maps instruction to function
const lightFuncs = {
  toggle: (light) => !light,
  on: () => true,
  off: () => false,
}

instructions.forEach(({ instruction, a, b }) => {
  const inst = lightFuncs[instruction]
  for (let row = a[0]; row <= b[0]; row++) {
    for (let column = a[1]; column <= b[1]; column++) {
      lights[row][column] = inst(lights[row][column])
    }
  }
})

// sum lights on
const total = lights.reduce((acc, row) => {
  return (
    acc +
    row.reduce((acc, light) => {
      return acc + (light ? 1 : 0)
    }, 0)
  )
}, 0)

return total
