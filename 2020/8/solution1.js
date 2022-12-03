const instructions = input
  .trim()
  .split('\n')
  .map((l) => l.split(' '))
  .map((i) => [i[0], i[1].slice(0, 1) == '+' ? Number(i[1].slice(1)) : Number(i[1].slice(1) * -1)])

const indexes = new Set()
let index = 0
let accumulator = 0

// emulates a lil fake computer which is expected to loop, and exits instead of looping
while (!indexes.has(index) && index < instructions.length) {
  indexes.add(index)
  const [op, num] = instructions[index]
  const functions = {
    nop: () => index++,
    jmp: () => (index += num),
    acc: () => {
      accumulator += num
      index++
    },
  }
  functions[op]()
}

return accumulator
