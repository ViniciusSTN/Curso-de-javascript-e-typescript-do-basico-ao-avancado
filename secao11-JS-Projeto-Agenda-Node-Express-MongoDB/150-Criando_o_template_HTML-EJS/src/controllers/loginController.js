const Login = require('../models/LoginModel');

exports.index = (req, res) => {
    if (req.session.user) return res.render('login-logged');    // se o usuário estiver logado, ele não precisa ver a tela de login
    return res.render('login');
};

exports.register = async function(req, res) {
    try {
        const login = new Login(req.body);
        await login.register();
    
        if(login.errors.length > 0) {
            req.flash('errors', login.errors);
    
            req.session.save(function() {
                return res.redirect('/login/index');   // redireciona de volta
            });
    
            return;
        }

        req.flash('success', 'Usuário criado com sucesso');

        // salvar dados da sessão do usuario no BD
        req.session.save(function() {
            return res.redirect('/login/index');
        });
        
    } catch(e) {
        console.log(e);
        res.render('404');
    }
};

exports.login = async function(req, res) {
    try {
        const login = new Login(req.body);
        await login.login();
    
        if(login.errors.length > 0) {
            req.flash('errors', login.errors);
    
            req.session.save(function() {
                return res.redirect('/login/index');   // redireciona de volta
            });

            return;
        }

        req.flash('success', 'Você entrou no sistema');

        // identificar o navegador e criar sessão para o usuário
        req.session.user = login.user;

        // salvar dados da sessão do usuario no BD
        req.session.save(function() {
            return res.redirect('/login/index');
        });
        
    } catch(e) {
        console.log(e);
        res.render('404');
    }
};

exports.logout = function(req, res) {
    req.session.destroy();  // finalizar a sessão
    res.redirect('/');
}
