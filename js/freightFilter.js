// Filter Javascript Arrays
function scanAndFilter(array, contraband) {
  let filteredItems = []

  array.filter(item => {
    if (item !== contraband) {
      filteredItems.push(item)
    }
  })

  return filteredItems
}