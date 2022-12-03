const passes = input
  .trim()
  .split("\n")
  .map((passes) => [passes.slice(0, 7), passes.slice(7)]);
// we find the seat positions based on boarding passes

// helper function does the heavy lifting - binary search
const BSP = (array, up) => {
  if (up) array[0] = Math.ceil((array[1] + array[0]) / 2);
  else array[1] = Math.floor((array[1] + array[0]) / 2);
  return array;
};

// gets all unique ids based on the boarding pass logic
const ids = passes.map((p) => {
  let forwardPos = [0, 127];
  let sidewaysPos = [0, 7];
  const [forward, sideways] = p;
  forward.split("").forEach((c) => {
    forwardPos = BSP(forwardPos, c == "B");
  });
  sideways.split("").forEach((c) => {
    sidewaysPos = BSP(sidewaysPos, c == "R");
  });
  return forwardPos[0] * 8 + sidewaysPos[0];
});

return Math.max(...ids);
