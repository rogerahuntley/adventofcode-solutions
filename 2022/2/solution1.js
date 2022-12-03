const instructions = input
  .trim()
  .split("\n")
  .map((g) => g.split(" "));
// first we split the instructions into pairs

// get points per round and return total
return instructions
  .map((i) => {
    // ["A", "Y"] => op: 1, you: 2
    let [op, you] = [[..." ABC"].indexOf(i[0]), [..." XYZ"].indexOf(i[1])];

    // get result, % wraps around
    let result = (op - you + 3) % 3;
    // you always get points for your hand
    let points = you;

    switch (result) {
      case 0:
        // draw
        points += 3;
        break;
      case 1:
        // lose
        break;
      case 2:
        // win
        points += 6;
        break;
    }

    return points;
  })
  .reduce((a, b) => a + b, 0);
