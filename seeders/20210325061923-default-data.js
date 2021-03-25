'use strict';
const bcrypt = require('bcryptjs')
const SEED_USER = {
  name: 'root',
  email: 'root@example.com',
  password: '12345678'
}
module.exports = {
  up: async (queryInterface, Sequelize) => {

    const userId = await queryInterface.bulkInsert('Users', [{
      name: SEED_USER.name,
      email: SEED_USER.email,
      password: bcrypt.hashSync(SEED_USER.password, bcrypt.genSaltSync(10), null),
      createdAt: new Date(),
      updatedAt: new Date()
    }], {})

    await queryInterface.bulkInsert('Todos',
      await Promise.all(Array.from({ length: 10 }).map((_, i) =>
      ({
        name: `name-${i}`,
        UserId: userId,
        createdAt: new Date(),
        updatedAt: new Date()
      })
      )), {})
  },

  down: async (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Todos', null, {})
      .then(() => queryInterface.bulkDelete('Users', null, {}))
  }
};
