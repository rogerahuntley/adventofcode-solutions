const boxes = input
  .trim()
  .split('\n')
  .map((box) => box.split('x').map(Number))

// get ribbon per box
return boxes
  .map((box) => {
    const [w, l, h] = box.sort((a, b) => a - b)
    const sides = [w, l]
    return [...sides, ...sides].reduce((a, b) => a + b, 0) + w * l * h
  })
  .reduce((a, b) => a + b, 0)
