// Args
const inputArray = process.argv[2]
const inputNumber = process.argv[3]

function getFirstAmountSorted(inputArray, inputNumber) {
  var sortedArray = inputArray.sort() // Alphabetically Sorts the array
  sortedArray.splice(inputNumber, sortedArray.length - 1) // Removes the n'th to last objecti in array
  return sortedArray // returns the trimmed array
}