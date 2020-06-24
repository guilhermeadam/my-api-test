const { Router } = require('express');
const routes = Router();

const UserController = require('./controllers/UserController')
const FolgaController = require('./controllers/FolgaController')
const EscalaController = require('./controllers/EscalaController')

routes.post('/user', UserController.index);

routes.get('/folga', FolgaController.index);

routes.get('/escala', EscalaController.index);


module.exports = routes;

