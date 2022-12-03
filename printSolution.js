const { readFileSync } = require("fs");

if (process.argv.length < 3) {
  console.log("no path argument");
  return;
}

const printSolution = async (year, day, fileName) => {
  const inputPath = `${year}/${day}/input.txt`;
  const input = await readFileSync(inputPath, { encoding: "utf8", flag: "r" });
  const solutionPath = `${year}/${day}/${fileName}`;
  const solution = await readFileSync(solutionPath, {
    encoding: "utf8",
    flag: "r",
  });
  result = new Function(`let input = \`${input}\`;\n${solution}`)();
  console.log(result);
};

const path = process.argv[2].split("/");
const [year, day, fileName] = path;

printSolution(year, day, fileName);
