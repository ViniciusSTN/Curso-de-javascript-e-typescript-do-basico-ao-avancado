exports.homePage = (req, res, next) => {
    console.log('Respondendo o cliente');
    res.render('index');
    console.log(`req.session: ${req.session.name}`);
    next();
};

exports.handlePost = (req, res) => {
    res.send(req.body);
    return;     // não é obrigatorio retornar, apenas para ter certeza que nada será executado depois dessa função
};
