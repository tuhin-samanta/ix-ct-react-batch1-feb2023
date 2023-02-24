const ob = {
  hello: "Check",
  test: "ok",
};

let test = Object.create(ob, {
  test: { value: 100, writable: true },
});

test.test = 500;

test.hello; //?
test.test; //?

function Food(type = null, name = null) {
  this.type = type;
  this.name = name;
}

Food.prototype.description = function () {
  return `The type of food is ${this.type} and name is ${this.name}`;
};

function Cake(name = "Fruit") {
  Food.call(this, "Cake", name);
}

Cake.prototype = Object.create(Food.prototype);
Cake.prototype.constructor = Cake;

let c = new Cake();
c.type; //?
c.name; //?
c.description(); //?
