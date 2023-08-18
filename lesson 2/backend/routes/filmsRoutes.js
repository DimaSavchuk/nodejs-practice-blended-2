// Cannot GET /api/v1/films
const filmsRoutes = require("express").Router();
const filmsController = require("../controllers/Films");
const isValidId = require("../middlewares/isValidId");

//додати фільм
// отримати всі
// отримати один
// обновити фільм
// видалити фільм

filmsRoutes.post("/films", filmsController.add);
filmsRoutes.get("/films", filmsController.getAll);
filmsRoutes.get("/films/:id", isValidId, filmsController.getById);
filmsRoutes.put("/films/:id", isValidId, filmsController.update);
filmsRoutes.delete("/films/:id", isValidId, filmsController.delete);

module.exports = filmsRoutes;
