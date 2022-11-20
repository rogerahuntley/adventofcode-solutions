const passes = input.trim().split('\n').map(passes => [passes.slice(0, 7), passes.slice(7)])
// we find the your id based on a gap in the ids

const BSP = (array, up) => {
  if(up) array[0] = Math.ceil((array[1] + array[0]) / 2)
  else array[1] = Math.floor((array[1] + array[0]) / 2)
  return array
}

const ids = passes.map(p => {
  let forwardPos = [0, 127]
  let sidewaysPos = [0, 7]
  const [forward, sideways] = p
  forward.split("").forEach(c => {
    forwardPos = BSP(forwardPos, c == "B")
  })
  sideways.split("").forEach(c => {
    sidewaysPos = BSP(sidewaysPos, c == "R")
  })
  return forwardPos[0] * 8 + sidewaysPos[0]
}).sort((a, b) => a - b)

for(var id = ids.at(0); id < ids.at(-1); id++){
  if(!ids.includes(id) && ids.includes(id-1) && ids.includes(id+1)){
    return id;
  }
}