const faker = require("faker/locale/es");
const fs = require("fs");
function generateUsers() {
  let users = [];
  for (let id = 1; id <= 100; id++) {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const jobTitle = faker.name.jobTitle();
    const prefix = faker.name.prefix();
    const sufix = faker.name.suffix();
    const jobArea = faker.name.jobArea();
    const email = faker.internet.email();
    const phone = faker.phone.phoneNumber();

    users.push({
      id: id,
      firstName,
      lastName,
      jobTitle,
      prefix,
      sufix,
      jobArea,
      email,
      phone,
    });
  }

  return { data: users };
}

const generatedData = generateUsers();

fs.writeFileSync("users.json", JSON.stringify(generatedData, null, "\t"));
