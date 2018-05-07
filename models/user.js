const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*
*   SCHEMA TO REPRESENT USER INFO
*/
const userSchema = new Schema({
    firstName: String,
    lastName: String,
    displayName: {
        type: String,
        required: false
    },
    email: String,    
    password: String,  //WOULD USUALLY HASH PW BUT STORING AS STRING FOR THIS EXERCISE
    company: String
})

module.exports = mongoose.model('User', userSchema);