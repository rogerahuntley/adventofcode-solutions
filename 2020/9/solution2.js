const data = input.trim().split("\n").map(Number);
// we want to re-use solution 1, and then find the continuous set of numbers that sum to it

const preambleLength = 25;

// gets all the valid numbers past the offset (so starts with the lowest possible number)
const numbers = data.slice(preambleLength);

const doesSum = (offset) => {
  const preamble = data.slice(offset, preambleLength + offset);
  const number = numbers[offset];
  for (let n1i = 0; n1i < preamble.length; n1i++) {
    for (let n2i = n1i + 1; n2i < preamble.length; n2i++) {
      const n1 = preamble[n1i],
        n2 = preamble[n2i];
      if (n1 + n2 == number) {
        return true;
      }
    }
  }
  return false;
};

// we use the number from solution 1 as a starting point for solution 2
let goalNum;
for (const n in numbers) {
  if (!doesSum(n)) {
    goalNum = numbers[n];
    break;
  }
}

// using every number as a possible starting point, count up until we find the sum
let numList;
for (let n1i = 0; n1i < data.length; n1i++) {
  const summed = [];
  let sum = 0;
  for (let n2i = n1i; n2i < data.length; n2i++) {
    const num = data[n2i];
    sum += num;
    summed.push(num);
    if (sum >= goalNum) {
      break;
    }
  }
  if (sum == goalNum) {
    numList = summed;
    break;
  }
}

return Math.min(...numList) + Math.max(...numList);
