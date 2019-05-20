class Dog {
  sound() {
    return "bark";
  }
}

class NullAnimal {
  sound() {
    return null;
  }
}

module.exports.getAnimal = type => {
  return type === "dog" ? new Dog() : new NullAnimal();
};
module.exports.AmdahlLaw = (a, b, isParalel, isSparated) => {
  return isParalel && isSparated ? a() - b() : a() + b();
};
module.exports.BrooksLaw = class {
  constructor(humanResource) {
    this.iniResource = humanResource;
    this.humanResource = humanResource;
  }
  addResource(num) {
    this.humanResource += num;
  }
  getDeliverDate() {
    const date = new Date();
    const days = this.humanResource - this.iniResource;
    return days ? this.addDays(days) : new Date();
  }
  addDays(days) {
    const date = new Date();
    date.setDate(date.getDate() + days);
    return date;
  }
};
