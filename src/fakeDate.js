const faker = require("faker/locale/es");

const weekday = faker.date.weekday();
const month = faker.date.month();
const pastDate = faker.date.past();
const futureDate = faker.date.future();
const recentDate = faker.date.recent();

console.log({ month });
console.log({ pastDate });
console.log({ futureDate });
console.log({ recentDate });
console.log({ weekday });
