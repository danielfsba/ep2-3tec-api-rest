import Usuarios from "../models/usuarioModel";

class UsuarioController {
  async create(req, res) {
    try {
      const newUsuario = await Usuarios.create(req.body);
      const Usuario = await Usuarios.findByPk(newUsuario.id);
      return res.json(Usuario);
    } catch (e) {
      if (e.name === 'SequelizeUniqueConstraintError') {
        return res
          .status(400)
          .json({ errors: ['Seção já cadastrada na base de dados.'] });
      }
      return res
        .status(400)
        .json({ errors: e.errors.map((err) => err.message) });
    }
  }

  // read/index
  async index(req, res) {
    try {
      const Usuario = await Usuarios.findAll({
        attributes:['id', 'nome', 'admin'],
        where: {}, // conditions
        limit: 10,
      });
      return res.json(Usuario);
    } catch (e) {
      console.log(e);
      return res
        .status(400)
        .json({ errors: e });
    }
  }

  // show
  async show(req, res) {
    try {
      const { id } = req.params;
      const Usuario = await Usuarios.findByPk(id, {
        attributes:['id', 'nome', 'admin'],
        where: {}, // conditions
        limit: 10,
      });
      if (!Usuario) {
        return res
          .status(400)
          .json({
            errors: ['Id não existe.'],
          });
      } else {
        return res.json(Usuario);
      }
    } catch (e) {
      return res
        .status(400)
        .json({ errors: e.errors.map((err) => err.message) });
    }
  }

  // update
  async update(req, res) {
    try {
      const { id } = req.params;
      const Usuario = await Usuarios.findByPk(id);

      if (!Usuario) {
        return res
          .status(400)
          .json({
            errors: ['Id não existe.'],
          });
      }
      await Usuario.update(req.body);

      const UsuarioUpdated = await Usuarios.findByPk(id, {
        attributes:['id', 'nome', 'admin'],
        where: {}, // conditions
        limit: 10,
      });

      return res.json(UsuarioUpdated);
    } catch (e) {
      if (e.name === 'SequelizeUniqueConstraintError') {
        return res
          .status(400)
          .json({ errors: ['Seção já cadastrada na base de dados.'] });
      }
      return res
        .status(400)
        .json({ errors: e.errors.map((err) => err.message) });
    }
  }

  // delete
  async delete(req, res) {
    try {
      const { id } = req.params;
      const Usuario = await Usuarios.findByPk(id);

      if (!Usuario) {
        return res
          .status(400)
          .json({
            errors: ['Id não existe.'],
          });
      }
      await Usuario.destroy();
      return res.json(null);
    } catch (e) {
      return res
        .status(400)
        .json({ errors: e.errors.map((err) => err.message) });
    }
  }
}

export default new UsuarioController();
