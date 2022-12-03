const { writeFileSync, mkdirSync, existsSync, readdirSync } = require("fs");

const generateEmptySolution = async (year, day) => {
  for (let file of ["solution1", "solution2"]) {
    let jesPath = `${year}/${day}/${file}.jes`;
    let jsPath = `${year}/${day}/${file}.js`;
    if (!existsSync(jesPath) && !existsSync(jsPath)) {
      await mkdirSync(`${year}/${day}`, { recursive: true });
      writeFileSync(jesPath, "");
    }
  }
};

for (let year = 2015; year < 2023; year++) {
  for (let day = 1; day < 26; day++) {
    generateEmptySolution(year, day);
  }
}
