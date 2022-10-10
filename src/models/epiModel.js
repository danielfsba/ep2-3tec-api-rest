import Sequelize, { Model } from 'sequelize';

export default class Epis extends Model {
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
      inativo: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      descartavel: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      tipo: {
        type: Sequelize.STRING(3),
        defaultValue: 'epi',
        validate: {
          fn: function (val) {
            if (val !== 'epi' || val !== 'epc') throw new error("Tipo de equipamento inválido. Utilize epi ou epc.");
          }

        }
      },

    },

      {
        sequelize,
        tableName: 'epis',
      });
    return this;
  }
}
