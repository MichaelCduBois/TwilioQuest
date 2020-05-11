function calculatePower(powerArray) {
  let multipliedPower = []

  // Creates new array where each item from powerArray is modified
  powerArray.map(item => {
    multipliedPower.push(item * 2)
  })

  // Returns sum of all elements in array
  return totalPower = multipliedPower.reduce((sum, current) => sum + current, 0)
}