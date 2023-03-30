const instructions = input
  .trim()
  .split('\n')
  .map((line) =>
    line
      .split('->')
      .reverse()
      .map((s) => s.trim())
  )

// converts outputs to indexees for easy lookup
const mappedInstuctions = Object.fromEntries(instructions)

const partReplace = {
  AND: '&',
  OR: '|',
  NOT: '~',
  LSHIFT: '<<',
  RSHIFT: '>>',
}

let determinedValues = {}

const buildScript = (string) => {
  // split into parts
  let parts = string.split(' ').map((s) => s.trim())

  // sub parts into desired values
  parts = parts.map((part) => {
    if (part in partReplace) {
      return partReplace[part]
    } else {
      return determineValue(part)
    }
  })

  // reconstruct
  return parts.join(' ')
}

const determineValue = (value) => {
  if (!isNaN(Number(value))) return Number(value)
  if (value in determinedValues) return determinedValues[value]

  // find instruction we need to determine
  const instruction = mappedInstuctions[value]
  // convert string into javascript :D
  const jsInstruction = buildScript(instruction)
  // run it
  const dValue = eval(jsInstruction)

  // memoize
  determinedValues[value] = dValue
  return dValue
}

const first_a = determineValue('a')

// set b to value of a and rerun
determinedValues = {
  b: first_a,
}

// we could hardcode it and only run it once, but then it would only work for this input...
return determineValue('a')
