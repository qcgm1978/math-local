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
