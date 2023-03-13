const string = input.trim()
// start with string, add numbers and get MD5 hash until hash starts with 5 zeroes

let i = 0
let found = false

const startsWith = '000000'

// loop through, increment i, and brute force hash
while (!found) {
  const _string = string + i
  const hash = CryptoJS.MD5(_string).toString()
  if (hash.startsWith(startsWith)) {
    found = true
  } else {
    i++
  }
}

return i
