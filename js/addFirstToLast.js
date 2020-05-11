// Works with arrays
const array = process.argv[2]

function addFirstToLast(array) {
  if (array.length === 1) {
    var firstAndLast = `${array}${array}`
  }
  if (array.length > 1) {
    var firstAndLast = `${array[0]}${array[array.length - 1]}`
  }
  if (array.length === 0) {
    return ``
  }

  return firstAndLast
}