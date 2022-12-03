const instructions = input
  .trim()
  .split('\n')
  .map((g) => g.split(' '))
// first we split the instructions into pairs

// get points per round and return total
return instructions
  .map((i) => {
    // ["A", "Y"] => op: 1, result: 0
    let [op, result] = [[...' ABC'].indexOf(i[0]), [...'YXZ'].indexOf(i[1])]

    // this is a bit weird
    // say we have 0, (0 + 3) % 3 = 0 (we lose points, should be 1-3), so we do ((0 + 2) % 3 = 2) + 1 = 3
    // we need to wrap around also in case we have -1, this does that for us
    let you = ((op - result + 2) % 3) + 1
    // point logic is the same
    let points = you

    switch (result) {
      case 0:
        // draw
        points += 3
        break
      case 1:
        // lose
        break
      case 2:
        // win
        points += 6
        break
    }

    return points
  })
  .reduce((a, b) => a + b, 0)
