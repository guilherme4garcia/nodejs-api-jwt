const postsControlador = require('./posts-controlador');
const { middlewaresAutenticacao } = require('../usuarios')

const passport = require('passport')

module.exports = app => {
  app
    .route('/post')
    .get(postsControlador.lista)
    .post(passport.authenticate('bearer', { session: false}),
    postsControlador.adiciona);

};
