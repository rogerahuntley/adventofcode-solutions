const dotenv = require('dotenv')
const { writeFileSync, mkdirSync, existsSync, unlinkSync } = require('fs')
dotenv.config()

// deleted files if they exist
const deleteFile = true

if (!process.env.AOC_SESSION_KEY) {
  console.error('no session key set')
  return
}

const key = process.env.AOC_SESSION_KEY

const getAndSaveInput = async (year, day) => {
  let path = `${year}/${day}/input.txt`
  if(existsSync(path) && deleteFile) {
    unlinkSync(path)
  }
  if (!existsSync(path)) {
    const input = await (
      await fetch(`https://adventofcode.com/${year}/day/${day}/input`, {
        headers: {
          cookie: `session=${key}`,
        },
      })
    ).text()

    if (input.includes(`Please don't repeatedly request this endpoint before it unlocks!`)) {
      console.log(`can't get ${year}/${day}, too early`)
      return false
    } else {
      await mkdirSync(`${year}/${day}`, { recursive: true })
      writeFileSync(path, input)
    }
  }
  return true
}

const runLoop = async () => {
  // cancel loop if we've hit an invalid
  let invalid_hit = false
  for (let year = 2015; year < 2023 && !invalid_hit; year++) {
    for (let day = 1; day < 26 && !invalid_hit; day++) {
      const valid = await getAndSaveInput(year, day)
      if (!valid) {
        invalid_hit = true
      }
    }
  }
}

runLoop()
