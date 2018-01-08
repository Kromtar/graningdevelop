const authJwt = require('../middlewares/authJwt');
const UserController = require('../controllers/user');

//TODO: Agregar middleware administrador

module.exports = app => {
  app.get('/api/testOpen', (req, res) => res.send('Hola Graning :), este lugar NO necesita token'));

  app.get('/api/testClose', authJwt.ensureAuth, (req, res) => {
    res.send('Hola Graning :), este ligar SI necesita token');
  });

  app.post('/api/loginUser', UserController.loginUser);

  app.get('/api/validateToken', authJwt.ensureAuth, (req, res) => {
    res.send({ status: true });
  });
};
