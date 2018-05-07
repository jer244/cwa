const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const aliasSchema = new Schema({
    alias: String,
    parent: String
})

module.exports = mongoose.model('Alias', aliasSchema);