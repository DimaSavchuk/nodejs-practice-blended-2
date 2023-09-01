const jwt = require("jsonwebtoken");

module.exports = (rolesArr) => {
  return (req, res, next) => {
    try {
      // отримуємо токен з заголовка
      const { roles } = req.user;

      let hasRole = false;

      roles.forEach((role) => {
        if (rolesArr.includes(role)) {
          hasRole = true;
        }
      });

      if (!hasRole) {
        res.status(403);
        throw new Error("Forbidden");
      }
      next();
    } catch (error) {
      res.status(403).json({ code: 403, message: error.message });
    }
  };
};

// {
//   friends: [ 'Sergii', 'Dima', 'Liza' ],
//   id: '64f22a2c019bb5cd6d96b489',
//   roles: [ 'ADMIN' ],
//   iat: 1693592221,
//   exp: 1693621021
// }
