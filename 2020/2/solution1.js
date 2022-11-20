const allPasswords = input.trim().split("\n")
// we count the number of occurences of a letter and make sure its in the range provided
// example string:
// 2-7 r: zrgsnrr

const goodPasswords = allPasswords.filter(p => {
  const [con, pass] = p.split(": ")
  const [r1, r2, letter] = con.split(/-|\s/g)
  const occur = (pass.match(new RegExp(letter, 'g')) || []).length
  return occur >= r1 && occur <= r2
})
return goodPasswords.length