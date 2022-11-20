const dotenv = require('dotenv');
const {writeFileSync, mkdirSync} = require('fs');
dotenv.config();

if(!process.env.AOC_SESSION_KEY){
  console.error('no session key set');
  return;
}

const key = process.env.AOC_SESSION_KEY;

const getAndSaveInput = async (year, day) => {
  const input = await (await fetch(`https://adventofcode.com/${year}/day/${day}/input`, {
    headers: {
      cookie: `session=${key}`
    }
  })).text();

  await mkdirSync(`${year}/${day}`, { recursive: true });

  writeFileSync(`${year}/${day}/input.txt`, input);
}

for(let year = 2015; year < 2022; year++){
  for(let day = 1; day < 26; day++){
    getAndSaveInput(year, day);
  }
}