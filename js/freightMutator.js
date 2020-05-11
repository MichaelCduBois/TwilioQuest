// .map is used when we need to iterate and return the data for each elelement

function mutate(array) {
  let mutatedArray = []
  array.map(item => {
    mutatedArray.push(item.toUpperCase())
  })
  return mutatedArray
}