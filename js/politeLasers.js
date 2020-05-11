const argument = process.argv[2]

function getLaserSetting(argument) {
  if (argument === `please`) {
    return `OFF`
  } else {
    return `ON`
  }
}