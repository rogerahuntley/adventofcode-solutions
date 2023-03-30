// run regex over all lines
const lines = input.trim().split('\n')

const removeRegex = /^"|"$/g
const replaceRegex = /\\"|\\\\|\\x.{2}/g

let stringTotal = 0
let memoryTotal = 0

// go through each line and track interesting stats
lines.forEach((s) => {
  stringTotal += s.length
  const reduced = s.replace(removeRegex, '').replace(replaceRegex, 'w') // doesn't matter what we replace with
  memoryTotal += reduced.length
})

return stringTotal - memoryTotal
