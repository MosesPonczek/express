var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var newsSchema = new Schema({
    title: { type: String, required: [true, 'Pole tytuł jest wymagane'] },
    author: { type: String, default: 'Przemysław Drożniak' },
    description: { type: String, required: [true, 'Pole opis jest wymagane'] },
    created: { type: Date, default: Date.now },
});

module.exports = mongoose.model('News', newsSchema);