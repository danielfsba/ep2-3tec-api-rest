import jwt from 'jsonwebtoken';
import Usuarios from '../models/usuarioModel';

export default async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ errors: 'Login requerido.' });
  }

  const [, token] = authorization.split(' ');
  try {
    const dados = jwt.verify(token, process.env.TOKEN_SECRET);
    const { id, email } = dados;

    const user = await Usuarios.findOne({ where: { id, email } });

    if (!user) {
      return res.status(401)
        .json({
          errors: 'Usuário Inválido.',
        });
    }

    req.userId = id;
    req.userEmail = email;
    return next();
  } catch (error) {
    return res.status(401)
      .json({
        errors: 'Token expirado ou Inválido.',
      });
  }
};
