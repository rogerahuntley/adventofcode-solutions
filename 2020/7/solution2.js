const bagRules = Object.fromEntries(
  input
    .trim()
    .split('\n')
    .map((br) => br.split(' contain '))
    .map((br) => [
      br[0].replaceAll(' bags', ''),
      Object.fromEntries(
        br[1]
          .replaceAll(/\.|\sbag|\sbags/g, '')
          .split(', ')
          .map((r) =>
            r
              .split(/\s(.*)/)
              .filter((r) => r)
              .reverse()
          )
          .map((r) => [r[0].replace(/s$/, ''), Number(r[1] == 'no' ? 0 : r[1])])
      ),
    ])
)
// after transforming the input array into bag rules (example...)
// bagRules = {
//   'pale magenta': {
//     'dim crimson': '2',
//     'plaid plum': '4',
//     'muted silver': '5',
//     'dim yellow': '2'
//   },
//   'vibrant orange': {
//     'other': 0
//   },
// }
// we then find the data

// this is a true recursive function, counts how many bags our bag can hold (max nested)
const getCount = (bagObject) => {
  let total = 1
  for (const [bag, quantity] of Object.entries(bagObject)) {
    if (quantity != 0) {
      total += getCount(bagRules[bag]) * quantity
    }
  }
  return total
}

// we can't count our parent bag, -1
return getCount(bagRules['shiny gold']) - 1
