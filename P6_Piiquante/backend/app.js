const express = require('express');
const mongoose = require('mongoose');
const app = express();
const stuffRoutes = require('./routes/stuff');
const userRoutes = require('./routes/user');
const path = require('path');

app.use(express.json());

mongoose.connect('mongodb+srv://user:password@clusterblablabla.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

  app.use((req, res, next) => {
    res.status(404).send(
        "<h1>VTFF</h1>")
});

  app.use('/images', express.static(path.join(__dirname, 'images')));
  app.use('/api/stuff', stuffRoutes);
  app.use('/api/auth', userRoutes);

module.exports = app;