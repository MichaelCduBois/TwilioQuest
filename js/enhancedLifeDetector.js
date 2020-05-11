// Prints value based on array
const status = process.argv[2]
const list = [`alive`, `flowering`, `shedding`, `other`]

if (status > 3) {
  console.log(list[3])
} else {
  console.log(list[status])
}