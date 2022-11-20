const {writeFileSync, mkdirSync} = require('fs');

const generateEmptySolution = async (year, day) => {
  await mkdirSync(`${year}/${day}`, { recursive: true });

  writeFileSync(`${year}/${day}/solution1.jes`, '');
  writeFileSync(`${year}/${day}/solution2.jes`, '');
}

for(let year = 2015; year < 2022; year++){
  for(let day = 1; day < 26; day++){
    generateEmptySolution(year, day)
  }
}