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

function getAnimal(type) {
  return type === "dog" ? new Dog() : new NullAnimal();
}

module.exports = { getAnimal };
