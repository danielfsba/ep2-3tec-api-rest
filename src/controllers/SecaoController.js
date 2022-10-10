import Secoes  from "../models/secaoModel";

class SecaoController {
  async create(req, res) {
    try {
      const newSecao = await Secoes.create(req.body);
      const Secao = await Secoes.findByPk(newSecao.id);
      return res.json(Secao);
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
      const Secao = await Secoes.findAll();
      return res.json(Secao);
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
      const Secao = await Secoes.findByPk(id);
      if (!Secao) {
        return res
          .status(400)
          .json({
            errors: ['Id não existe.'],
          });
      } else {
        return res.json(Secao);
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
      const Secao = await Secoes.findByPk(id);

      if (!Secao) {
        return res
          .status(400)
          .json({
            errors: ['Id não existe.'],
          });
      }
      await Secao.update(req.body);

      const SecaoUpdated = await Secoes.findByPk(id);

      return res.json(SecaoUpdated);
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
      const Secao = await Secoes.findByPk(id);

      if (!Secao) {
        return res
          .status(400)
          .json({
            errors: ['Id não existe.'],
          });
      }
      await Secao.destroy();
      return res.json(null);
    } catch (e) {
      return res
        .status(400)
        .json({ errors: e.errors.map((err) => err.message) });
    }
  }
}

export default new SecaoController();
