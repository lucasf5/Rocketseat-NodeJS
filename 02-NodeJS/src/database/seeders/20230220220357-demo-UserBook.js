/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'UserBooks',
      [
        {
          userId: 1,
          bookId: 1
        },
        {
          userId: 1,
          bookId: 2
        },
        {
          userId: 2,
          bookId: 2
        }
      ],
      {}
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('UserBooks', null, {})
  }
}
