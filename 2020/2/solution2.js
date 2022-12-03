const allPasswords = input.trim().split("\n");
// we check if there is exactly 1 occurence of a specific letter in the positions provided
// example string:
// 2-7 r: zrgsnrr

const goodPasswords = allPasswords.filter((p) => {
  const [con, pass] = p.split(": ");
  const [r1, r2, letter] = con.split(/-|\s/g);
  const chars = [pass.charAt(r1 - 1), pass.charAt(r2 - 1)];
  return chars.filter((c) => c == letter).length == 1;
});
return goodPasswords.length;
