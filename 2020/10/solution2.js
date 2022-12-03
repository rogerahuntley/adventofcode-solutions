const adapters = input
  .trim()
  .split("\n")
  .map(Number)
  .sort((a, b) => a - b);
// we need to find all possible adapter chains

// add built-in adapter
adapters.push(adapters.at(-1) + 3);

let currentJolt = 0;
let index = 0;

// 3: 1 is the device's built-in adapter
let adapted = {};

// we can break these up into sub chains by keeping track of when the minimum distance is 3
const subchains = [];

let chain = [currentJolt];
while (index < adapters.length) {
  const nextAdapter = adapters[index];
  const diff = nextAdapter - currentJolt;
  adapted[diff] ||= 0;
  adapted[diff]++;

  // keep chain in line, and split when needed
  if (diff == 3) {
    subchains.push(chain);
    chain = [];
  }
  chain.push(nextAdapter);

  currentJolt = nextAdapter;
  index++;
}

// then we'll have to get the possible options for each subchain, and finally multiply everything together

const chainOptions = {};

const chainVal = (chain) => {
  // so these will all be a distance of 1 (at least they are in my dataset + the provided examples)
  // therefore, we can calulate the number of options just by the number of adapters in the chain
  // 1 = 1, 2 = 1, 3 = 2, 4 = 4, 5 = ?, .... ?
  // its not quite logarithmic because of the 3 cap
  // lets just store an object of options and generate as needed
  return (chainOptions[chain.length] ||= countChainOptions(chain));
};

countChainOptions = (chain) => {
  let options = [[chain[0]]];
  // we know the first and last are nessecary, we 'll do our best to remove those from the loop
  const first = chain[0];
  const last = chain.at(-1);

  // we're gonna loop through options, find those that end in the current number, and create entries for the next (up to) 3 possible options
  for (let num = first; num < last; num++) {
    // find all options ending in the current number
    const theseOptions = options.filter((c) => c.at(-1) == num);
    for (
      let nextNum = num + 1;
      nextNum <= last && nextNum < num + 4;
      nextNum++
    ) {
      // generate new options continuing off of the current option
      for (const thisOption of theseOptions) {
        options.push([...thisOption, nextNum]);
      }
    }

    // make sure the uncompleted options are removed
    options = options.filter((o) => !theseOptions.includes(o));
  }
  return options.length;
};

// now if we find the # of possible solutions for each subchain and multiply them together
return subchains.reduce((total, chain) => {
  return total * chainVal(chain);
}, 1);
