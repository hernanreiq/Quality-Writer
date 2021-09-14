//DEPENDENCIAS
const express = require('express');
const morgan = require('morgan');
const path = require('path');

const { mongoose } = require('./database');

const app = express();

// ROUTER FILE
const router = require('./routes/router');

//SETTINGS
const PORT = process.env.PORT || 3000;

//MIDDLEWARES
app.use(morgan('dev'));
app.use(express.json());

//ROUTES
app.use('/api/post', router);

//STATIC FILES
app.use(express.static(path.join(__dirname, 'public')));

//STARTING THE SERVER
app.listen(PORT, () => {
    console.log("Server is ready!", PORT);
})