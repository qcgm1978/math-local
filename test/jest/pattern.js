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
module.exports.ConwayLaw = class {
  construct() {}
  server() {
    return "backend";
  }
  web() {
    return "frontend";
  }
  get units() {
    return ["server", "web"].length;
  }
};
module.exports.HofstadterLaw = class {
  setDevCycle(days) {
    this.days = 2 * days;
  }
  getDays() {
    return this.days;
  }
};
module.exports.AmaraLaw = class {
  constructor(ini) {
    this.ini = ini;
  }
  getShortRunEffect(period) {
    return (this.ini += period);
  }
  getLongRunEffect(period) {
    return this.ini ** period;
  }
};
module.exports.HyrumLaw = class {
  constructor() {}
  doSth() {
    throw new Error(Math.trunc(Math.random() * 10));
  }
};
module.exports.MooreLaw = class {
  constructor() {
    this.iniTransistors = 2300; //Intel 4004
    this.ini = 1971;
    this.normalExponent = 12 / 18;
    this.slowStart = 2013;
    this.slowExponent = 1 / 3;
  }
  set transistorsNum(year) {
    this.year = year;
    this.gap = this.year - this.ini;
    const slowYears = this.year - this.slowStart;
    const fastProgress =
      slowYears > 0
        ? this.iniTransistors *
          (1 + this.normalExponent) ** (this.slowStart - this.ini)
        : 0;
    const slowProgress =
      slowYears > 0 ? fastProgress * (1 + this.slowExponent) ** slowYears : 0;
    this.total = fastProgress + slowProgress;
  }
  get magnitudeOrder() {
    return Math.trunc(this.total).toString().length;
  }
  get linearGrowth() {
    return (this.iniTransistors * this.gap).toString().length;
  }
};
