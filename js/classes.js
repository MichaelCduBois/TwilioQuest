class Materializer {
  constructor(targetName) {
    // Code Here
    this.target = targetName
    this.activated = false
  }

  activate() {
    this.activated = true
  }

  materialize() {
    if (this.activated) {
      return this.target
    } else {
      return undefined
    }
  }
}

const m = new Materializer('Kevin');
console.log(m.activated); // would print "false"

m.activate();
console.log(m.activated); // would print "true"

console.log(m.materialize()); // would print "Kevin"