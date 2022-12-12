const map = input
  .trim()
  .split('\n')
  .map((l) => l.split('').map(Number))

const directions = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
]

let topScore = 0

// we loop through every spot and look for edges
for (const row_i in map) {
  const row = map[row_i]
  for (const tree_i in row) {
    const tree = row[tree_i]
    const directionScores = []
    let seen = false
    // if we hit an edge and no tree has been as tall or taller, its visible
    for (const direction of directions) {
      let score = 0
      let edge_hit = false
      let hidden = false
      let coord = [Number(row_i), Number(tree_i)]
      while (!edge_hit && !hidden && !seen) {
        coord[0] += direction[0]
        coord[1] += direction[1]
        let otherTree = map[coord[0]]?.[coord[1]]
        if (otherTree == undefined) {
          edge_hit = true
        } else if (otherTree >= tree) {
          score++
          hidden = true
        } else {
          score++
        }
      }
      directionScores.push(score)
    }
    const score = directionScores.reduce((a, b) => a * b, 1)
    if (score > topScore) {
      topScore = score
    }
  }
}

return topScore
