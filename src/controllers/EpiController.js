import Epis from "../models/epiModel";

class EpiController {
  async create(req, res) {
    try {
      const newEpi = await Epis.create(req.body);
      const Epi = await Epis.findByPk(newEpi.id);
      return res.json(Epi);
    } catch (e) {
      if (e.name === 'SequelizeUniqueConstraintError') {
        return res
          .status(400)
          .json({ errors: ['EPI já cadastrado na base de dados.'] });
      }
      return res
        .status(400)
        .json({ errors: e.errors.map((err) => err.message) });
    }
  }

  // read/index
  async index(req, res) {
    try {
      const data = await Epis.findAndCountAll();
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
      const Epi = await Epis.findByPk(id);
      if (!Epi) {
        return res
          .status(400)
          .json({
            errors: ['Id não existe.'],
          });
      } else {
        return res.json(Epi);
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
      const Epi = await Epis.findByPk(id);

      if (!Epi) {
        return res
          .status(400)
          .json({
            errors: ['Id não existe.'],
          });
      }
      await Epi.update(req.body);

      const EpiUpdated = await Epis.findByPk(id);

      return res.json(EpiUpdated);
    } catch (e) {
      if (e.name === 'SequelizeUniqueConstraintError') {
        return res
          .status(400)
          .json({ errors: ['EPI já cadastrado na base de dados.'] });
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
      const Epi = await Epis.findByPk(id);

      if (!Epi) {
        return res
          .status(400)
          .json({
            errors: ['Id não existe.'],
          });
      }
      await Epi.destroy();
      return res.json(null);
    } catch (e) {
      return res
        .status(400)
        .json({ errors: e.errors.map((err) => err.message) });
    }
  }
}

export default new EpiController();
