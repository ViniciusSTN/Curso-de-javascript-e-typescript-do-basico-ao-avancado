exports.middlewareGlobal = (req, res, next) => {
  // ---------------------------------------------------------------
  // para injetar conteudo em todas as rotas usando middleware

  res.locals.umaVariavelLocal = 'Este é o valor da variavel local';

  // ---------------------------------------------------------------
  next();
};

exports.outroMiddleware = (req, res, next) => {
  next();
};
