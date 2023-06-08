// 'use strict';

//  @type {import('sequelize-cli').Migration}

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('alunos', {
      id: {
        type: Sequelize.INTEGER,
        allowNUll: false,
        autoIncrement: true,
        primaryKey: true,
      },
      nome: {
        type: Sequelize.STRING,
        allowNUll: false,
      },
      sobrenome: {
        type: Sequelize.STRING,
        allowNUll: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNUll: false,
      },
      idade: {
        type: Sequelize.INTEGER,
        allowNUll: false,
      },
      peso: {
        type: Sequelize.FLOAT,
        allowNUll: false,
      },
      altura: {
        type: Sequelize.FLOAT,
        allowNUll: false,
      },

      created_at: {
        type: Sequelize.DATE,
        allowNUll: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNUll: false,
      },
    });
  },

  async down(queryInterface) {
    return queryInterface.dropTable('alunos');
  },
};
