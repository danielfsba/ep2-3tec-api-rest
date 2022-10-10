import Sequelize, { Model } from 'sequelize';

export default class Secoes extends Model {
  static init(sequelize) {
    super.init({
      codigo: {
        type: Sequelize.STRING(20),
        defaultValue: '',
        validate: {
          len: {
            args: [1, 20],
            msg: 'Campo código deve ter até 20 caracteres.',
          },
        },
      },
      descricao: {
        type: Sequelize.STRING(150),
        defaultValue: '',
        validate: {
          len: {
            args: [0, 150],
            msg: 'Campo descrição deve ter até 150 caracteres.',
          },
        },
      },
    },

      {
        sequelize,
        tableName: 'secoes',
      });
    return this;
  }
}
