const instructions = input
  .trim()
  .split('\n')
  .map((inst) => inst.split(' '))
  .map((inst) => [inst[0], Number(inst[1])])

let X = 1
let cycle = 0

const signals = []

// go through instructions
instructions.forEach((instruction) => {
  const [name, data] = instruction
  const adding = name == 'addx'
  let instCycles = adding ? 2 : 1
  // cycle cost
  while (instCycles != 0) {
    instCycles--
    cycle++
    if ((cycle + 20) % 40 == 0) {
      signals.push(cycle * X)
    }
  }
  // we add to register at the end of the cycle
  if (adding) {
    X += data
  }
})

return signals.reduce((a, b) => a + b, 0)
