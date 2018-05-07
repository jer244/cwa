/*
* GET DEPENDENCIES
*/
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');

/*
* INSTANTIATE EXPRESS APP
*/
const app = express();

/*
* SERVE STATIC PAGES
*/

app.use(express.static(path.join(__dirname, 'dist/vm-cwa')));
// app.use(express.static(path.join(__dirname, 'public')));

/*
* ENABLE STORAGE OF ENV VARIABLES
*/
require('dotenv').config();

/* 
* CONNECT TO MONGO HOST
*/
mongoose.connect('mongodb://' + process.env.DBUSER + ':' + process.env.DBPASSWORD + '@ds215910.mlab.com:15910/v_cust');

/*
* MIDDLEWARE SETUP
*/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/*
* SET UP ROUTES
*/
const api = require('./routes/api');

app.use('/api', api);
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/vm-cwa/index.html'));
});


/*
 * START NODE SERVER 
*/
// app.listen(3000, function () {
//     console.log('API running on localhost:3000');
// })

const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`API running on localhost:${port}`));