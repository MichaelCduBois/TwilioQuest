class TargetingSolution {
  constructor(coords) {
    this.coords = coords
  }

  target() {
    return `(${this.coords.x}, ${this.coords.y}, ${this.coords.z})`
  }
}

const sln = new TargetingSolution({
  x: 45,
  y: 12,
  z: -1
})

console.log(sln.target())