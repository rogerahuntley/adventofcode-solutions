// run regex over all lines
const lines = input.trim().split('\n')

const escapeRegex = /"|\\/g

let increasedLength = 0

lines.forEach((s) => {
  const originalLength = s.length
  const escaped = s.replace(escapeRegex, (match) => '\\' + match)
  increasedLength += escaped.length - originalLength + 2 // + 2 is for the quotes
})

return increasedLength
