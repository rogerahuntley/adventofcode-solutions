const passports = input.trim().split("\n\n").map(p => Object.fromEntries(p.split(/\n|\s/g).map(f => f.split(':'))))
// we format the passport into regular objects, and we check if these fields hold data

const required = ['byr','iyr','eyr','hgt','hcl','ecl','pid']
const isPassportValid = passport => required.every(p => p in passport)
return passports.filter(p => isPassportValid(p)).length