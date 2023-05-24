exports.paginaInicial = (req, res) => {

  // ------------------------------------------------------
  // OBS: EXECUTAR UMA VEZ E COMENTAR, descomentar o console.log
  // req.session.usuario = {nome: 'luiz', logado: true}  // ficará salvo por 7 dias
  // console.log(req.session.usuario);                   // 7 dias                 


  // OBS: EXECUTAR UMA VEZ E COMENTAR, descomentar o console.log
  // req.flash('info', 'Olá mundo');
  // req.flash('error', 'deu erro');
  // req.flash('success', 'deu certo');
  // console.log(req.flash('info'), req.flash('error'), req.flash('success'));     // mostrará apenas uma vez

  // ------------------------------------------------------

  res.render('index');
  return;
};

exports.trataPost = (req, res) => {
  res.send(req.body);
  return;
};
