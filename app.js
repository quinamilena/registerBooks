const express = require('express');
const path =  require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const mongosse = require('mongoose');
mongosse.connect('mongodb://localhost:27017/projetoLivraria', {useNewUrlParser: true, useUnifiedTopology: true});

// Colocar as rotas;
const livrariaRoutes = require('./Api/Routes/livrariaRoutes');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Usar as rotas;
app.use('/livraria', livrariaRoutes);

module.exports = app;