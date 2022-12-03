const groups = input
  .trim()
  .split("\n\n")
  .map((g) => g.split("\n").map((gm) => new Set(gm.split("").sort())));
// we merge answered shared among all group members and then count the total

const groupAnswers = groups.map((g) => {
  // we're looking for all answers answered by all members, so we can just use the first member's answers as a reference index
  const [first, ...rest] = g;
  rest.forEach((ga) => {
    first.forEach((a) => {
      if (!ga.has(a)) {
        // we'll loop through the answers from the "others" and remove the answers from the first member if it isn't found
        first.delete(a);
      }
    });
  });
  return first;
});

return groupAnswers.reduce((total, ga) => total + ga.size, 0);
