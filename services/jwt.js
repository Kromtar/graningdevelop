const jwt = require('jwt-simple');
const moment = require('moment');

exports.createToken = function (user) {
  const payload = {
    name: user.name,
    email: user.email,
    role: user.role,
    id: user._id,
    iat: moment().unix(),
    exp: moment().add(10, 'days').unix()
  };

  return jwt.encode(payload, process.env.JWTSECRET);
};
