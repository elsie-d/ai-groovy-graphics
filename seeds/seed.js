const sequelize = require('../config/connection');
const { User, Image } = require('../models');
const userData = require('./userData.json');
const imageData = require('./imageData.json')

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  console.log(User);
  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  for (const images of imageData) {
    await Image.create({
      ...images,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  console.log(users)

  process.exit(0);
};

seedDatabase();
