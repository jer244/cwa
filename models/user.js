const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: String,
    lastName: String,
    displayName: {
        type: String,
        required: false
    },
    email: String,    
    password: String,  //would usually hash PW but keeping as string for this exercise
    company: String
})

module.exports = mongoose.model('User', userSchema);