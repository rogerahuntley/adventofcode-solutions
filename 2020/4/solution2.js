const passports = input.trim().split("\n\n").map(p => Object.fromEntries(p.split(/\n|\s/g).map(f => f.split(':'))))
// we format the passport into regular objects, and we check if these fields are valid

const between = (num, low, high) => {
  return num && !isNaN(num) && num >= low && num <= high
}

const required = ['byr','iyr','eyr','hgt','hcl','ecl','pid']
const isPassportComplete = passport => required.every(p => p in passport)

const isPassportValid = pass => {
  if(!isPassportComplete(pass)) return false
  if(!between(pass.byr, 1920, 2002)) return false
  if(!between(pass.iyr, 2010, 2020)) return false
  if(!between(pass.eyr, 2020, 2030)) return false
  if(!between(pass.hgt.replace('cm', ''), 150, 193) && !between(pass.hgt.replace('in', ''), 59, 76)) return false
  if(!pass.hcl.match(/^#([0-9]|[a-f]){6}$/)) return false
  if(!pass.ecl.match(/^(amb|blu|brn|gry|grn|hzl|oth)$/)) return false
  if(isNaN(pass.pid) || pass.pid.length != 9) return false
  return true;
}


return passports.filter(p => isPassportValid(p)).length

