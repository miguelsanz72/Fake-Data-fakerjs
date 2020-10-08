const faker = require("faker");

const name = faker.name.firstName();
const review = faker.random.words(80);

console.log(`Name: ${name}`);
console.log(`Review: ${review}`);
