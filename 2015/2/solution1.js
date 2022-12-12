const boxes = input
  .trim()
  .split('\n')
  .map((box) => box.split('x').map(Number))

// get wrapping paper per box
return boxes
  .map((box) => {
    const [w, l, h] = box
    const sides = [w * l, w * h, l * h]
    return [...sides, ...sides].reduce((a, b) => a + b, 0) + Math.min(...sides)
  })
  .reduce((a, b) => a + b, 0)
