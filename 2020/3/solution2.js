const map = input
  .trim()
  .split("\n")
  .map((row) => row.split(""));
// same as solution 1, but we check multiple slopes

const slopes = [
  [1, 1],
  [1, 3],
  [1, 5],
  [1, 7],
  [2, 1],
];

const checkSlope = (slope) => {
  let pos = [0, 0];
  let trees = 0;
  while (pos[0] < map.length) {
    let [y, x] = pos;
    // skip first
    if (y != 0) {
      // wrap around left/right
      x = x % map[y].length;
      if (map[y][x] == "#") {
        trees++;
      }
    }
    // move forward
    pos = pos.map((p, i) => p + slope[i]);
  }
  return trees;
};

return slopes.reduce((n, slope) => n * checkSlope(slope), 1);
