const adapters = input.trim().split('\n').map(Number).sort((a, b) => a - b)
// we need to build the chain of adapters

// add built-in adapter
adapters.push(adapters.at(-1) + 3)

let currentJolt = 0
let index = 0

let adapted = {}

// since there are no repeats and simple 1-directional rules, we can just chain them in order
while(index < adapters.length){
  const nextAdapter = adapters[index]
  const diff = nextAdapter - currentJolt;
  adapted[diff] ||= 0
  adapted[diff]++
  currentJolt = nextAdapter
  index++
}

return adapted[1] * adapted[3]