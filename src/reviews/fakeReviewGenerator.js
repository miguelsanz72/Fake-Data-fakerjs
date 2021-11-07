const faker = require("faker/locale/es");
const fs = require("fs");

function generateReviews() {
  let reviews = [];
  for (let id = 1; id <= 100; id++) {
    const name = faker.name.firstName();
    const review = faker.random.words(80);

    reviews.push({
      id: id,
      name: name,
      review: review,
    });
  }

  return { data: reviews };
}

const generatedData = generateReviews();

fs.writeFileSync("reviews.json", JSON.stringify(generatedData, null, "\t"));
