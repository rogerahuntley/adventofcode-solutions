let [crates, instructions] = input
  .trimEnd()
  .split('\n\n')
  .map((half) => half.split('\n'))

const piles = {}

// place the crates in the piles (in reverse, for stacking)
crates
  .slice(0, -1)
  .reverse()
  .map((row) => {
    let charIndex = 0
    while (row[charIndex * 3 + charIndex] != undefined) {
      const box = row
        .slice(charIndex * 3 + charIndex, charIndex * 3 + charIndex + 3)
        .replace(/\[|\]/g, '')
      if (box.trim()) {
        // +1 to match instructions
        piles[charIndex + 1] ||= []
        piles[charIndex + 1].push(box)
      }
      charIndex++
    }
  })

// follow instructions
instructions
  .map((i) =>
    i
      .split(/move | from | to /g)
      .filter((c) => c)
      .map(Number)
  )
  .map((i) => {
    const [move, from, to] = i
    for (var n = 0; n < move; n++) {
      const crate = piles[from].pop()
      piles[to].push(crate)
    }
  })

// get creates from the top of every pile
return Object.values(piles)
  .map((p) => p.at(-1) || '')
  .join('')
