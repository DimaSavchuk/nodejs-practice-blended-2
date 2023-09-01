// Cannot GET /api/v1/films
const filmsRoutes = require("express").Router();
const filmsController = require("../controllers/Films");
const authMiddleware = require("../middlewares/authMiddleware");
const isValidId = require("../middlewares/isValidId");
const rolesMiddleware = require("../middlewares/rolesMiddleware");

//додати фільм
// отримати всі
// отримати один
// обновити фільм
// видалити фільм
//[ "ADMIN", "MODERATOR", "USER", "CTO"]

filmsRoutes.post("/films", authMiddleware, filmsController.add);
filmsRoutes.get(
  "/films",
  authMiddleware,
  rolesMiddleware(["ADMIN", "MODERATOR"]),
  filmsController.getAll
);
filmsRoutes.get("/films/:id", isValidId, filmsController.getById);
filmsRoutes.put("/films/:id", isValidId, filmsController.update);
filmsRoutes.delete("/films/:id", isValidId, filmsController.delete);

module.exports = filmsRoutes;
