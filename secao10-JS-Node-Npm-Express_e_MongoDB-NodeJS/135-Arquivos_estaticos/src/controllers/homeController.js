exports.homePage = (req, res) => {
    res.render('index');
};

exports.handlePost = (req, res) => {
    res.send('Sou a nova rota de POST');
};
