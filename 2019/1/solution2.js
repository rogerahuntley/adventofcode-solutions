const modules = input.trim().split('\n').map(Number)
// split input, loops modules through algorithm and sum

const getFuel = fuel => Math.floor(fuel / 3) - 2

let total = 0;
for(let m of modules){
  let fuel = getFuel(m);
  while(fuel > 0){
    total += fuel;
    fuel = getFuel(fuel)
  }
}

return total