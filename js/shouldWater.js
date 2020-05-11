const life = process.argv[2]
const dryness = process.argv[3]

if (life == 0 && dryness > 10) {
  console.log(`WATER`)
}