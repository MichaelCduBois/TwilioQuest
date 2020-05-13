class Ducktypium {
  constructor(color) {
    this.allowedColors = [`red`, `blue`, `yellow`]
    if (!this.allowedColors.includes(color)) {
      // throw `color can only be red, blue, or yellow`
      throw new Error(`color can only be red, blue, or yellow`)
    } else {
      this.color = color
    }
    this.calibrationSequence = []
  }

  refract(input) {
    // Code for color changing here
    this.allowedColors = [`red`, `blue`, `yellow`]
    if (!this.allowedColors.includes(input)) {
      // throw `color can only be red, blue, or yellow`
      throw new Error(`color can only be red, blue, or yellow`)
    } else {
      this.input = input
    }
    switch(input) {
      case `red`:
        if (this.color === `red`) {
          return `red`
        } else {
          console.log(`Error`)
        }
        if (this.color === `blue`) {
          return `purple`
        }
        if (this.color === `yellow`) {
          return `orange`
        }
        break
      case `blue`:
        if (this.color === `red`) {
          return `purple`
        }
        if (this.color === `blue`) {
          return `blue`
        }
        if (this.color === `yellow`) {
          return `green`
        }
        break
      case `yellow`:
        if (this.color === `red`) {
          return `orange`
        }
        if (this.color === `blue`) {
          return `green`
        }
        if (this.color === `yellow`) {
          return `yellow`
        }
        break
      }
  }

  calibrate(input) {
    this.input = input.sort()
    this.input.map(number => {
      this.calibrationSequence.push(number * 3)
    })
    return this.calibrationSequence
  }
}