const dan = {
  name: "Dan",
  email: "me@athena.ca",
  address: {
    city: "Boston"
  }
};

// Spread syntax "spread like butter", reassign
const tammy = { ...dan, name: "Tammy", address: { ...dan.address } };
tammy.address.city = "Boston";
console.log(tammy);

// Destructuring
const { name, email, ...rest } = dan;
console.log(rest);

// array destructuring
const cars = [
  { make: "Honda", model: "accord" },
  { make: "Porsche", model: "911 turbo" },
  { make: "toyota", model: "Supra" }
];
console.log(cars);
const [honda, , third] = cars;
console.log(third);

// use filter to create an array without toyota
const nonToy = cars.filter(car => car.make !== "toyota");
console.log(nonToy);

// use map to create an array of just models
const models = nonToy.map(car => car.model);
console.log(models);
