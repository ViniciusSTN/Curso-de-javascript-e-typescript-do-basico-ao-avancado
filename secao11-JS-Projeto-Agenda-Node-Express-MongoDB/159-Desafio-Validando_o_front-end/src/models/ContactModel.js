const mongoose = require('mongoose');
const validator = require('validator');

const ContactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  lastName: { type: String, required: false, default: ''},  // não obigatório
  email: { type: String, required: false, default: ''},  // não obigatório
  phone: { type: String, required: false, default: ''},  // não obigatório
  date: { type: Date, default: Date.now}
});

const ContactModel = mongoose.model('Contact', ContactSchema);

function Contact(body) {
  this.body = body;
  this.errors = [];
  this.contact = null;
}

Contact.prototype.register = async function() {
  this.validate();

  if (this.errors.length > 0) return;
  this.contact = await ContactModel.create(this.body);
}

Contact.prototype.validate = function() {
  this.cleanUp();
  if (this.body.email && !validator.isEmail(this.body.email)) this.errors.push('E-mail inválido');
  if (!this.body.name) this.errors.push('Nome é um campo obrigatório');
  if (!this.body.email && !this.body.phone) this.errors.push('Pelo menos um contato deve ser enviado: e-mail ou telefone');
}

Contact.prototype.cleanUp = function() {
  for (const key in this.body) {
    if (typeof this.body[key] !== 'string') {
      this.body[key] = '';
    }
  }

  this.body = {
    name: this.body.name,
    lastName: this.body.lastName,
    email: this.body.email,
    phone: this.body.phone
  };
}

Contact.prototype.edit = async function(id) {
  if (typeof id !== 'string') return;

  this.validate();
  if(this.errors.length > 0) return;

  // update na BD
  // atualiza na BD e retorna um novo objeto com dado atualizados (por isso o {new: true})
  this.contact = await ContactModel.findByIdAndUpdate(id, this.body, {new: true}); 
}

// método estático (não acessam this)
Contact.findId = async function(id) {
  if (typeof id !== 'string') return;
  const contact = await ContactModel.findById(id);  // retorna um usuario ou null
  return contact;
}

Contact.findContacts = async function() {
  // é possivel enviar um objeto com 'filtros' no .find()
  const contacts = await ContactModel.find()
    .sort({date: -1}) // ordem decrescente de criação (obs: 1 é crescente)
  return contacts;
}

Contact.delete = async function(id) {
  if (typeof id !== 'string') return;

  // findOneAndDelete() precisa receber um objeto com 'filtro'
  const contact = await ContactModel.findOneAndDelete({_id: id}); // deletar do BD, retorna null ou o contato
  return contact;
}

module.exports = Contact;
