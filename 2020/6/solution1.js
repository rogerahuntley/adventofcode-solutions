const groupAnswers = input
  .trim()
  .split("\n\n")
  .map((g) => new Set(g.replaceAll("\n", "").split("").sort()));
// we merge group answers and then count the total

let total = 0;
groupAnswers.forEach((g) => {
  total += g.size;
});
return total;
