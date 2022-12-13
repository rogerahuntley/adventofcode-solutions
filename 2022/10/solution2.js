const instructions = input
  .trim()
  .split('\n')
  .map((inst) => inst.split(' '))
  .map((inst) => [inst[0], Number(inst[1])])

let X = 1
let cycle = 0

const signals = [[]]

const getPixels = () => {
  return [X, X + 1, X + 2]
}

// go through instructions
instructions.forEach((instruction) => {
  const [name, data] = instruction
  const adding = name == 'addx'
  let instCycles = adding ? 2 : 1
  // cycle cost
  while (instCycles != 0) {
    instCycles--
    cycle++
    const position = cycle % 40
    const display = signals.at(-1)
    if (position == 0) {
      signals.push([])
    }
    // draw to screen
    if (getPixels().includes(position)) {
      display.push('#')
    } else {
      display.push('.')
    }
  }
  // we add to register at the end of the cycle
  if (adding) {
    X += data
  }
})

// WEBSITE WILL HAVE TO BE UPDATED TO SUPPORT MULTI-LINE STRINGS
return signals
  .filter((line) => line.length > 0)
  .map((line) => line.join(''))
  .join('\n')
