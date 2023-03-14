/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Books',
      [
        {
          title: 'The Great Gatsby',
          author: 'F. Scott Fitzgerald'
        },
        {
          title: 'To Kill a Mockingbird',
          author: 'Harper Lee'
        },
        {
          title: '1984',
          author: 'George Orwell'
        }
      ],
      {}
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Books', null, {})
  }
}
