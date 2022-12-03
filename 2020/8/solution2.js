const instructions = input
  .trim()
  .split('\n')
  .map((l) => l.split(' '))
  .map((i) => [i[0], i[1].slice(0, 1) == '+' ? Number(i[1].slice(1)) : Number(i[1].slice(1) * -1)])

let indexes = new Set()
let index = 0
let accumulator = 0

let jmpTestedTo = 0 // stores at what index we flip, and we increment w/ each attempt
let jmpCurrent = 0 // flips nop/jmp where jmpCurrent == jmpTestedTo, gets reset w/ each attempt

const maxSwitchable = instructions.filter((i) => ['nop', 'jmp'].includes(i[0])).length

// now we emulate a lil fake computer which is expected to loop due to a bad command, but we try to get it to terminate
while (jmpTestedTo <= maxSwitchable && index < instructions.length) {
  indexes = new Set()
  index = 0
  accumulator = 0

  jmpCurrent = 0

  while (!indexes.has(index) && index < instructions.length) {
    indexes.add(index)
    let [op, num] = instructions[index]

    // make sure jmpCurrent increments
    if (['nop', 'jmp'].includes(op)) {
      // flip the operator
      if (jmpTestedTo == jmpCurrent) {
        op = op == 'nop' ? 'jmp' : 'nop'
      }
      jmpCurrent++
    }

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
  jmpTestedTo++
}

// why did it exit? red herring?
if (index < instructions.length) {
  console.log('infinite loop')
}

return accumulator
