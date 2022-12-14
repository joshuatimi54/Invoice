const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose')

// express app 
const app = express();

// register view engine
app.set('view engine', 'ejs')

//listen for requests
app.listen(3000);

//middleware & static files
app.use(express.static('public'));
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.render('index');
});

// 404 page
/**app.use((req, res) => {
    res.status(404).render('404');
});**/