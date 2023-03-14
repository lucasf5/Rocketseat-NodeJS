/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          name: 'John Doe',
          email: 'JohnDoe@email.com',
          password:
            '$2y$10$GOcsBwRyT83sOrVs/GuBbuStQH8OfK9h2x2HJr.Zs1eVnwOX4ICHi'
        },
        {
          name: 'Jane Doe',
          email: 'JaneDoe@email.com',
          password:
            '$2y$10$vMUiFyoS2kFZqsx38BVznueEsekdRODNYcGSiE.A632jyN3RuiWWK'
        }
      ],
      {}
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {})
  }
}
