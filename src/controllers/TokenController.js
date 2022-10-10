import jwt from 'jsonwebtoken';
import Usuario from '../models/usuarioModel';

class TokenController {
  async create(req, res) {
    const { email = '', password = '' } = req.body;

    if (!email) {
      return res
        .status(401)
        .json({ errors: 'Favor informar um email válido.' });
    }

    if (!password) {
      return res
        .status(401)
        .json({ errors: 'Favor informar uma senha válida.' });
    }

    const user = await Usuario.findOne({ where: { email } });

    if (!user) return res.status(401).json({ errors: 'Usuário Inválido.' });
    if (!await user.passwordIsvalid(password)) return res.status(401).json({ errors: 'Senha Inválida.' });

    const { id, admin } = user;
    const token = jwt.sign(
      { id, email },
      process.env.TOKEN_SECRET,
      { expiresIn: process.env.TOKEN_EXPIRATION },
    );

    return res.json({
      token,
      user: {
        nome: user.nome, id, email, admin,
      },
    });
  }
}

export default new TokenController();
