function scan(array) {
  index = 0
  let contrabandIndexes = []
  array.forEach(item => {
    if (item === `contraband`) {
      contrabandIndexes.push(index)
    }
    index++
  })
  return contrabandIndexes
}