const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*
*   SCHEMA TO STORE COMPANY INFO IN
*/

const aliasSchema = new Schema({
    alias: String,
    parent: String,
    inviteOnly: Boolean
})

module.exports = mongoose.model('Alias', aliasSchema);