const prisma = require('../prisma');

/** Seeds the database with a user, posts, and related data */
const seed = async () => {
  // Create a user
  await prisma.user.upsert({
    where: {
      username: 'foo'
    },
    update: {},
    create: {
      username: 'foo',
      password: 'bar',
      posts: {
        create: [
          {
            title: "St. Jude's Children's foundation",
            email: 'stjudesfoundation@charity.org',
            image:
              'https://t3.ftcdn.net/jpg/02/51/72/24/360_F_251722407_w6NIo76K1m4mJClG1kGtKyhIoAmoGa73.jpg',
            phone: '132-526-7390',
            address: '123 Rainbow Rd',
            description: '',
            category: 'clothes'
          },
          {
            title: 'Food Pantry',
            email: 'foodpantry@charity.org',
            image:
              'https://i.pinimg.com/originals/39/b0/c8/39b0c816d13fea4844e82bcefc1633b9.png',
            phone: '133-656-7390',
            address: '88 Yellow Brick Rd',
            description: 'We need food!',
            category: 'food'
          },
          {
            title: 'Redemption Arc',
            email: 'redemptionarc@charity.org',
            image:
              'https://www.shutterstock.com/image-vector/black-white-ark-boat-ship-600nw-2041061711.jpg',
            phone: '663-466-6690',
            address: '101 Sea World Rd',
            description: 'We need furniture!',
            category: 'furniture'
          },
          {
            title: 'Emergency Groceries',
            email: 'emergencygroceries@charity.org',
            image:
              'https://img.freepik.com/premium-vector/grocery-logo-vector-template_180868-2480.jpg',
            phone: '233-326-7790',
            address: '404 Electric Avenue',
            description: 'We need clothes!',
            category: 'clothes'
          },
          {
            title: 'Santa Clarita Hospital',
            email: 'santaclarita@charity.org',
            image:
              'https://static.vecteezy.com/system/resources/thumbnails/021/809/795/small/doctors-day-illustration-png.png',
            phone: '113-467-7867',
            address: '90 Backstreet Back Blv',
            description: 'We need clothes!',
            category: 'clothes'
          },
          {
            title: 'Great Will',
            email: 'greatwill@charity.org',
            image:
              'https://i.fbcd.co/products/resized/resized-750-500/gw-wg-unique-logo-designs-2-8586306e6ee59c0dcde298cb4c90db6953130410af7e66384ba1be5db30a7a43.jpg',
            phone: '111-422-7640',
            address: '82 Cherry Brick Road',
            description: 'We need food!',
            category: 'food'
          },
          {
            title: 'Charity Comet',
            email: 'charitycomet@charity.org',
            image:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQcuPUr1ToidL5T10V0PaXXHTiyulNSnl6KehLoSJQL1NU533Ib5PLIYtZ4E9znM5IeDU&usqp=CAU',
            phone: '993-496-9990',
            address: '1000 Houston Avenue',
            description: 'We need furniture!',
            category: 'furniture'
          },
          {
            title: 'Giving Tree',
            email: 'givingtree@charity.org',
            image:
              'https://png.pngtree.com/png-vector/20220831/ourmid/pngtree-banyan-tree-logo-design-vector-png-image_6131481.png',
            phone: '888-488-9890',
            address: '737 Applesauce Lane',
            description: 'We need furniture!',
            category: 'furniture'
          },
          {
            title: 'Hugs 4 Bugs',
            email: 'hugs4bugs@charity.org',
            image:
              'https://i.pinimg.com/736x/6d/21/d0/6d21d021eae146a916f7d1480ad23e6b.jpg',
            phone: '773-455-5890',
            address: '3 Anthill Road',
            description: 'We need food!',
            category: 'food'
          },
          {
            title: 'Compass of Courage',
            email: 'couragecompass@charity.org',
            image:
              'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/229b7eb8-783c-4f80-9594-c911cc045c52/dbhs5zp-54b90d3e-1fd2-4f1e-89a3-d05b09b3d1ee.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzIyOWI3ZWI4LTc4M2MtNGY4MC05NTk0LWM5MTFjYzA0NWM1MlwvZGJoczV6cC01NGI5MGQzZS0xZmQyLTRmMWUtODlhMy1kMDViMDliM2QxZWUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.IuJWcjRtBy8TrTOhQoodeBIFB8v8JAt5x2oeUVONiTM',
            phone: '453-346-7000',
            address: '333 Sea Street',
            description: 'We need clothes!',
            category: 'clothes'
          }
        ]
      }
    }
  });
};

seed()
  .then(async () => await prisma.$disconnect())
  .catch(async (err) => {
    console.error(err);
    await prisma.$disconnect();
    process.exit(1);
  });
