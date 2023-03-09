let monkeys = input.trim().split('\n\n')

const data = monkeys
  .map((monkey) => monkey.split('\n'))
  .map((monkey, i) => {
    return {
      number: i,
      starting: monkey[1].split(': ')[1].split(', ').map(Number),
      operation: monkey[2].split(': ')[1].split(' '),
      test: Number(monkey[3].split('by ')[1]), // all divisible by
      true: monkey[4].split('monkey ')[1],
      false: monkey[5].split('monkey ')[1],
      checked: 0,
    }
  })

// lowest common multiple lets us reduce our worry by a common factor
// this keeps it within computer range (instead of Infinity)
const lcm = data.reduce((a, b) => a * b.test, 1)

let round = 0

while (round < 10000) {
  round++
  data.forEach((monkey) => {
    const items = monkey.starting
    monkey.starting = []
    monkey.checked += items.length
    items.forEach((worry) => {
      // operation:
      // [ 'new', '=', 'old', '+', 'old' ]
      worry = eval(monkey.operation.slice(2).join('').replaceAll('old', 'worry'))
      worry = worry % lcm
      if (worry % monkey.test == 0) {
        data[monkey.true].starting.push(worry)
      } else {
        data[monkey.false].starting.push(worry)
      }
    })
  })
}

// get two highest monkey checks and multiply them together
return data
  .sort((a, b) => a.checked - b.checked)
  .slice(-2)
  .reduce((a, b) => a * b.checked, 1)
