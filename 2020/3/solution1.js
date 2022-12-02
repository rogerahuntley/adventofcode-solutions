const map = input.trim().split("\n").map(row => row.split(''))
// we check points on the path of a repeating map and count the number of trees we hit

const slope = [1,3]
let pos = [0,0]
let trees = 0

while(pos[0] < map.length){
  let [y, x] = pos
  // skip first
  if(y != 0){
    // wrap around left/right
    x = x % map[y].length
    if(map[y][x] == "#"){
      trees++;
    }
  }
  // move forward
  pos = pos.map((p, i) => p + slope[i]);
}
return trees