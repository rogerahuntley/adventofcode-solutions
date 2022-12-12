const numbers = input.trim().split('\n').map(Number)
// find frequency that repeats after cycling through

const frequencies = new Set([0])
let total = 0
let returnTotal
let checking = true
while (checking) {
  for (let n of numbers) {
    total += n
    if (frequencies.has(total)) {
      checking = false
    }
    frequencies.add(total)
  }
}

return returnTotal
