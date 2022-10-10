import Funcoes from "../models/funcaoModel";

class FuncaoController {
  async create(req, res) {
    try {
      const newFuncao = await Funcoes.create(req.body);
      const Funcao = await Funcoes.findByPk(newFuncao.id);
      return res.json(Funcao);
    } catch (e) {
      if (e.name === 'SequelizeUniqueConstraintError') {
        return res
          .status(400)
          .json({ errors: ['Função já cadastrada na base de dados.'] });
      }
      return res
        .status(400)
        .json({ errors: e.errors.map((err) => err.message) });
    }
  }

  // read/index
  async index(req, res) {
    try {
      const data = await Funcoes.findAndCountAll();
      return res.json( data );
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
      const Funcao = await Funcoes.findByPk(id);
      if (!Funcao) {
        return res
          .status(400)
          .json({
            errors: ['Id não existe.'],
          });
      } else {
        return res.json(Funcao);
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
      const Funcao = await Funcoes.findByPk(id);

      if (!Funcao) {
        return res
          .status(400)
          .json({
            errors: ['Id não existe.'],
          });
      }
      await Funcao.update(req.body);

      const FuncaoUpdated = await Funcoes.findByPk(id);

      return res.json(FuncaoUpdated);
    } catch (e) {
      if (e.name === 'SequelizeUniqueConstraintError') {
        return res
          .status(400)
          .json({ errors: ['Função já cadastrada na base de dados.'] });
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
      const Funcao = await Funcoes.findByPk(id);

      if (!Funcao) {
        return res
          .status(400)
          .json({
            errors: ['Id não existe.'],
          });
      }
      await Funcao.destroy();
      return res.json(null);
    } catch (e) {
      return res
        .status(400)
        .json({ errors: e.errors.map((err) => err.message) });
    }
  }
}

export default new FuncaoController();
