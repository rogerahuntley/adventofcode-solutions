let seats = input
  .trim()
  .split('\n')
  .map((row) => row.split(''))

const directions = [
  [-1, 1],
  [1, -1],
  [-1, -1],
  [1, 1],
  [-1, 0],
  [1, 0],
  [0, 1],
  [0, -1],
]

let changing = true
while (changing) {
  changing = false
  const newPlan = []

  for (let row_i in seats) {
    const row = seats[row_i]
    for (let seat_i in row) {
      const seat = row[seat_i]

      // find neighbors and tally up their state
      let taken = 0
      for (let direction of directions) {
        const [x, y] = direction
        // optional ?. lets us assume undefined without breaking
        const neighbor = seats[Number(row_i) + x]?.[Number(seat_i) + y]
        // we only need to count taken seats
        if (neighbor == '#') {
          taken++
        }
      }

      // change current seat for next round
      let newSeat = seat
      if (seat == 'L' && taken == 0) {
        newSeat = '#'
        changing = true
      } else if (seat == '#' && taken >= 4) {
        newSeat = 'L'
        changing = true
      }

      newPlan[row_i] ||= []
      newPlan[row_i][seat_i] = newSeat
    }
  }
  // set all seats to state after last round
  seats = newPlan
}

return seats.map((row) => row.filter((s) => s == '#').length).reduce((a, b) => a + b, 0)
