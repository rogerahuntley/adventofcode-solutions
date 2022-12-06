const directions = input.trim().split('').map(a => a == '(' ? 1 : -1)
// split, convert directions to numbers

// return index when santa enters basement
let floor = 0
for(let n = 0; n < input.length; n++){
  floor += directions[n]
  if(floor < 0){
    return n + 1
  }
}