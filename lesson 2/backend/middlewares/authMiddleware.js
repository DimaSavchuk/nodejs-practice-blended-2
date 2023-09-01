const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    // отримуємо токен з заголовка
    const [type, token] = req.headers.authorization.split(" ");
    if (type === "Bearer" && token) {
      const decoded = jwt.verify(token, "cat");
      req.user = decoded;
      next();
    }
    // розшифровуємо токен
    //передаємо информацію з токена далі
  } catch (error) {
    res.status(401).json({ code: 401, message: error.message });
  }
};

// {
//   friends: ['Sergii', 'Dima', 'Liza'],
//   id: '64f213ba7c8a920c03b47429',
//   iat: 1693589205,
//   exp: 1693618005
// }
