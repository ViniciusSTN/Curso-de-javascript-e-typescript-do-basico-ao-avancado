const Contact = require('../models/ContactModel');

exports.index = async (req, res) => {
  const contacts = await Contact.findContacts();  // buscando contatos salvos
  res.render('index', { contacts });
  return;
};


