'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('epis', {
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
      inativo: {
        type: Sequelize.BOOLEAN,
        alloNull: false,
        defaultValue: 0
      },
      descartavel: {
        type: Sequelize.BOOLEAN,
        alloNull: false,
        defaultValue: 0
      },
      tipo: {
        type: Sequelize.STRING(3),
        allowNull: false,
        unique: false,
        defaultValue: 'epi'
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

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('epis')
  }
};
