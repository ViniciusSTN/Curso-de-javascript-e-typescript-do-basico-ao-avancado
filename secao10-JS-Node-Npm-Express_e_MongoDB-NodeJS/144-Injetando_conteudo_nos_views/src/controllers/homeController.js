exports.paginaInicial = (req, res) => {

  // OBS: EXECUTAR UMA VEZ E COMENTAR, descomentar o console.log
  // req.session.usuario = {nome: 'luiz', logado: true}  
  // console.log(req.session.usuario);                                  

  // OBS: EXECUTAR UMA VEZ E COMENTAR, descomentar o console.log
  // req.flash('info', 'Olá mundo');
  // req.flash('error', 'deu erro');
  // req.flash('success', 'deu certo');
  // console.log(req.flash('info'), req.flash('error'), req.flash('success'));

  // ------------------------------------------------------------------------
  // é possivel injetar conteudo no render usando objeto
  res.render('index', {
    titulo: 'Este será o <em>título da página</em>',
    numeros: [1,2,3,4,5,6,7,8,9,10]
  });
  return;
};

exports.trataPost = (req, res) => {
  res.send(req.body);
  return;
};
