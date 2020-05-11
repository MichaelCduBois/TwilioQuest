function scan(array) {
  let contraband = 0
  array.forEach(item => {
    if (item === `contraband`) {
      contraband++
    }
  })
  return contraband
}