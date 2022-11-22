const instructions = input.trim().split('\n').map(l => l.split(' ')).map(i => [i[0], i[1].slice(0,1) == "+" ? Number(i[1].slice(1)) : Number(i[1].slice(1) * -1)])

let indexes = new Set()
let index = 0
let accumulator = 0

let jmpTestedTo = 0 // this increases every attempt
let jmpCurrent = 0 // this increases every nop/jmp, and flips where this == TestedTo

const maxSwitchable = instructions.filter(i => ['nop','jmp'].includes(i[0])).length

// while there are still possible switches to be made and index has not terminated
while(jmpTestedTo <= maxSwitchable && index < instructions.length){
  indexes = new Set()
  index = 0
  accumulator = 0
  jmpCurrent = 0

  // while not infinited looped yet but index also has not terminated
  while(!indexes.has(index) && index < instructions.length){
    indexes.add(index)
    let [op, num] = instructions[index]

    // make sure jmpCurrent increments
    if(['nop','jmp'].includes(op)){
      // flip the operator
      if(jmpTestedTo == jmpCurrent){
        op = op == 'nop' ? 'jmp' : 'nop'
      }
      jmpCurrent++;
    }

    const functions = {
      nop: () => index++,
      jmp: () => index += num,
      acc: () => { accumulator += num; index++ }
    }
    functions[op]();
    console.log(op, num)
  }
  jmpTestedTo++;
}

if(index < instructions.length){
  console.log('infinite loop')
}

return accumulator