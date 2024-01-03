const sequelize = require('../config/connection');
const { User } = require('../models');
const userData = require('./userData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  console.log(User);
  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  console.log(users)

  process.exit(0);
};

seedDatabase();
