const { readFileSync } = require('fs')
const flags = require('./flags.json')

if (process.argv.length < 3) {
  console.log('no path argument')
  return
}

const printSolution = async (year, day, fileName) => {
  const inputPath = `${year}/${day}/input.txt`
  const input = await readFileSync(inputPath, { encoding: 'utf8', flag: 'r' })
  const solutionPath = `./${year}/${day}/${fileName}`
  const friendlyPath = `${year}/${day}/${fileName}`.replace(/solution|.js/g, '')
  const solution = await readFileSync(solutionPath, {
    encoding: 'utf8',
    flag: 'r',
  })
  // inject input, crypto-js
  global.input = input
  if (flags.usesCryptoJS.includes(friendlyPath)) {
    global.CryptoJS = require('crypto-js')
  }
  const result = new Function(solution)()
  console.log(result)
}

const path = process.argv[2].split('/')
const [year, day, fileName] = path

printSolution(year, day, fileName)
