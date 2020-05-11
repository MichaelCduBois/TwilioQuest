// Determines if number is divisible by 3 or five
const number = process.argv[2]

if (number % 3 === 0 && number % 5 === 0) {
  console.log(`JavaScript`)
}
if (number % 3 === 0 && number % 5 !== 0) {
  console.log(`Java`)
}

if (number % 3 !== 0 && number % 5 === 0) {
  console.log(`Script`)
}

if (number % 3 !== 0 && number % 5 !== 0) {
  console.log(number)
}