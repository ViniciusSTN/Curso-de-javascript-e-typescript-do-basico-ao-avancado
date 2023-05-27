const { awrap } = require('regenerator-runtime');
const Contact = require('../models/ContactModel');

exports.index = (req, res) => {
    // para injetar conteudo na view e previnir o erro "contact is not defined", enviar um objeto vazio
    res.render('contact', {
        contact: {},
    });
}

exports.register = async (req, res) => {
    try {
        const contact = new Contact(req.body);
        await contact.register();
    
        if (contact.errors.length > 0) {
            req.flash('errors', contact.errors);
            req.session.save(() => res.redirect('/contato/index'));
            return;
        }
    
        req.flash('success', 'Contato registrado com sucesso');
        req.session.save(() => res.redirect(`/contato/index/${contact.contact._id}`));
        return;
    }
    catch (err) {
        console.log(err);
        return res.render('404');
    }
}

exports.editIndex = async function (req, res) {
    if(!req.params.id) return res.render('404');

    const contact = await Contact.findId(req.params.id);   // recebe o contato ou null
    if (!contact) return res.render('404');
    
    res.render('contact', { contact });
}
