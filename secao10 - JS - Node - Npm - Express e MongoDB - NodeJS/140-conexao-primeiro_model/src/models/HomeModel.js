// -----------------------------------------------------
const mongoose = require('mongoose');

const HomeSchema = mongoose.Schema({
    titulo: { type: String, required: true },
    descricao: String
});

const HomeModel = mongoose.model('Home', HomeSchema);

module.exports = HomeModel;


// normalmente será assim:
// class Home {

// }

// module.exports = Home;

// -----------------------------------------------------