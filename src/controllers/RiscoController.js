import Riscos from "../models/riscoModel";

class RiscoController {
  async create(req, res) {
    try {
      const newRisco = await Riscos.create(req.body);
      const Risco = await Riscos.findByPk(newRisco.id);
      return res.json(Risco);
    } catch (e) {
      if (e.name === 'SequelizeUniqueConstraintError') {
        return res
          .status(400)
          .json({ errors: ['Risco já cadastrada na base de dados.'] });
      }
      return res
        .status(400)
        .json({ errors: e.errors.map((err) => err.message) });
    }
  }

  // read/index
  async index(req, res) {
    try {
      const data = await Riscos.findAndCountAll();
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
      const Risco = await Riscos.findByPk(id);
      if (!Risco) {
        return res
          .status(400)
          .json({
            errors: ['Id não existe.'],
          });
      } else {
        return res.json(Risco);
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
      const Risco = await Riscos.findByPk(id);

      if (!Risco) {
        return res
          .status(400)
          .json({
            errors: ['Id não existe.'],
          });
      }
      await Risco.update(req.body);

      const RiscoUpdated = await Riscos.findByPk(id);

      return res.json(RiscoUpdated);
    } catch (e) {
      if (e.name === 'SequelizeUniqueConstraintError') {
        return res
          .status(400)
          .json({ errors: ['Risco já cadastrada na base de dados.'] });
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
      const Risco = await Riscos.findByPk(id);

      if (!Risco) {
        return res
          .status(400)
          .json({
            errors: ['Id não existe.'],
          });
      }
      await Risco.destroy();
      return res.json(null);
    } catch (e) {
      return res
        .status(400)
        .json({ errors: e.errors.map((err) => err.message) });
    }
  }
}

export default new RiscoController();
