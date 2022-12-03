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
//     'dim crimsons': '2',
//     'plaid plums': '4',
//     'muted silvers': '5',
//     'dim yellows': '2'
//   },
//   'vibrant orange': {
//     'others': 0
//   },
// }
// we then find the data

const checked = new Set()
const toCheck = new Set(['shiny gold'])
const canHold = new Set()

// we gather all the bags that can hold our shiny gold bag, and then gather all the bags that can hold those
// we're using a set because it automatically filters out duplicates
while (toCheck.size > 0) {
  for (const checking of toCheck) {
    toCheck.delete(checking)
    // so we'll keep looping bag parents as long as we're adding into it
    for (const [bag, options] of Object.entries(bagRules)) {
      if (canHold.has(bag)) {
        continue
      }
      if (options.hasOwnProperty(checking)) {
        canHold.add(bag)
        if (!checked.has(bag) && !toCheck.has(bag)) {
          toCheck.add(bag)
        }
      }
    }
    checked.add(checking)
  }
}

return canHold.size
