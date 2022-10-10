'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('funcoes', {
      id: {
        type: Sequelize.INTEGER,
        alloNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      codigo: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      descricao: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('funcoes')
  }
}
