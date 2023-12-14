const prisma = require("../prisma");

/** Seeds the database with a user, posts, and related data */
const seed = async () => {
  // Create a user
  await prisma.user.upsert({
    update: {},
    data: {
      username: "foo",
      password: "bar",
      posts: {
        create: [
          {
            title: "St. Jude's Children's foundation",
            email: "stjudesfoundation@charity.org",
            image:
              "https://w7.pngwing.com/pngs/205/731/png-transparent-default-avatar-thumbnail.png",
            phone: "132-526-7390",
            address: "123 Rainbow Rd",
            description: "We need clothes!",
            category: "clothes",
          },
          {
            title: "Food Pantry",
            email: "foodpantry@charity.org",
            image:
              "https://w7.pngwing.com/pngs/205/731/png-transparent-default-avatar-thumbnail.png",
            phone: "133-656-7390",
            address: "88 Yellow Brick Rd",
            description: "We need food!",
            category: "food",
          },
          {
            title: "Redemption Arc",
            email: "redemptionarc@charity.org",
            image:
              "https://w7.pngwing.com/pngs/205/731/png-transparent-default-avatar-thumbnail.png",
            phone: "663-466-6690",
            address: "101 Sea World Rd",
            description: "We need furniture!",
            category: "furniture",
          },
          {
            title: "Emergency Groceries",
            email: "emergencygroceries@charity.org",
            image:
              "https://w7.pngwing.com/pngs/205/731/png-transparent-default-avatar-thumbnail.png",
            phone: "233-326-7790",
            address: "404 Electric Avenue",
            description: "We need clothes!",
            category: "clothes",
          },
          {
            title: "Santa Clarita Hospital",
            email: "santaclarita@charity.org",
            image:
              "https://w7.pngwing.com/pngs/205/731/png-transparent-default-avatar-thumbnail.png",
            phone: "113-467-7867",
            address: "90 Backstreet Back Blv",
            description: "We need clothes!",
            category: "clothes",
          },
          {
            title: "Great Will",
            email: "greatwill@charity.org",
            image:
              "https://w7.pngwing.com/pngs/205/731/png-transparent-default-avatar-thumbnail.png",
            phone: "111-422-7640",
            address: "82 Cherry Brick Road",
            description: "We need food!",
            category: "food",
          },
          {
            title: "Charity Comet",
            email: "charitycomet@charity.org",
            image:
              "https://w7.pngwing.com/pngs/205/731/png-transparent-default-avatar-thumbnail.png",
            phone: "993-496-9990",
            address: "1000 Houston Avenue",
            description: "We need furniture!",
            category: "furniture",
          },
          {
            title: "Giving Tree",
            email: "givingtree@charity.org",
            image:
              "https://w7.pngwing.com/pngs/205/731/png-transparent-default-avatar-thumbnail.png",
            phone: "888-488-9890",
            address: "737 Applesauce Lane",
            description: "We need furniture!",
            category: "furniture",
          },
          {
            title: "Hugs 4 Bugs",
            email: "hugs4bugs@charity.org",
            image:
              "https://w7.pngwing.com/pngs/205/731/png-transparent-default-avatar-thumbnail.png",
            phone: "773-455-5890",
            address: "3 Anthill Road",
            description: "We need food!",
            category: "food",
          },
          {
            title: "Compass of Courage",
            email: "couragecompass@charity.org",
            image:
              "https://w7.pngwing.com/pngs/205/731/png-transparent-default-avatar-thumbnail.png",
            phone: "453-346-7000",
            address: "333 Sea Street",
            description: "We need clothes!",
            category: "clothes",
          },
        ],
      },
    },
  });
};

seed()
  .then(async () => await prisma.$disconnect())
  .catch(async (err) => {
    console.error(err);
    await prisma.$disconnect();
    process.exit(1);
  });
