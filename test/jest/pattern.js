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
module.exports.transformData = rawData => {
  // check if no data
  if (!rawData) {
    return [];
  }

  // check for specific case
  if (rawData.length == 1) {
    return [];
  }

  // actual function code goes here
  return rawData.map(item => item);
};
module.exports.contentTypes = {
  post: () => console.log("creating a post..."),
  video: () => "creatinga  video...",
  default: () => console.log("unrecognized content type")
};
module.exports.nestedTernaries = (conditionA, conditionB) =>
  !conditionA ? "Not A" : conditionB ? "A & B" : "A";
// Conceptual Data Model
const EntityRelationshipDiagrams = {
  Zones: class {
    // Logical Data Model
    constructor() {
      this.ZoneId = EntityRelationshipDiagrams.PhysicalDataModel.getId(105);
      this.voice = "truths";
    }
    // Physical Data Model
    speak() {
      return `${this.ZoneId} ${this.voice} as work`;
    }
  },
  Boss: class {
    // Logical Data Model
    constructor() {
      this.BossId = EntityRelationshipDiagrams.PhysicalDataModel.getId(0);
      this.voice = "barks";
    }
    // Physical Data Model
    speak() {
      return `${this.BossId} ${this.voice} in the meeting`;
    }
  },
  // external Physical Data Model
  PhysicalDataModel: {
    getId(num) {
      return num < 100
        ? this.getRandomInt(0, 100)
        : this.getRandomInt(num, 1000);
    },
    getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  }
};
module.exports.EntityRelationshipDiagrams = EntityRelationshipDiagrams;
module.exports.ParkinsonLaw = class {
  constructor(workload) {
    this.workload = workload;
    this.processingDays = 0;
    this.startTime = new Date();
  }
  // set processingDays(days) {
  //   console.log(days);
  //   return days;
  // }

  get actualWorkload() {
    // console.log(this.processingDays);
    const now = new Date(
      this.processingDays * 3600 * 1000 + this.startTime.getTime()
    );
    const duration = now.getTime() - this.startTime.getTime();
    return this.workload + duration;
  }
};
