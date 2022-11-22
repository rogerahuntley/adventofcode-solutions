const instructions = input.trim().split('\n').map(l => l.split(' ')).map(i => [i[0], i[1].slice(0,1) == "+" ? Number(i[1].slice(1)) : Number(i[1].slice(1) * -1)])

const indexes = new Set()
let index = 0
let accumulator = 0

while(!indexes.has(index)){
  indexes.add(index)
  const [op, num] = instructions[index]
  const functions = {
    nop: () => index++,
    jmp: () => index += num,
    acc: () => { accumulator += num; index++ }
  }
  functions[op]();
}

return accumulator