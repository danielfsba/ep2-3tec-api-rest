import Sequelize, { Model } from 'sequelize';
import bcryptjs from 'bcryptjs';

export default class Usuarios extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Campo nome deve ter entre 3 e 255 caracteres.',
          },
        },
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'e-mail já cadastrado.',
        },
        validate: {
          isEmail: {
            msg: 'Preencha com um e-mail válido.',
          },
        },
      },
      password_hash: {
        type: Sequelize.STRING,
        defaultValue: '',
      },
      password: {
        type: Sequelize.VIRTUAL,
        defaultValue: '',
        validate: {
          len: {
            args: [6, 50],
            msg: 'Campo senha deve ter entre 6 e 50 caracteres.',
          },
        },
      },
      admin: {
        type: Sequelize.STRING(1),
        defaultValue: '0',
      },

    },
      {
        sequelize,
        tableName: 'usuarios',
      });
    this.addHook('beforeSave', async (user) => {
      if (user.password) {
        // eslint-disable-next-line no-param-reassign
        user.password_hash = await bcryptjs.hash(user.password, 8);
      }
    });
    return this;
  }

  passwordIsvalid(password) {
    return bcryptjs.compare(password, this.password_hash);
  }
}


