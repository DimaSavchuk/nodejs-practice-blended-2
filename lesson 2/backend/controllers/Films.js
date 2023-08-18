const FilmsModel = require("../models/FilmModel");
const asyncHandler = require("express-async-handler");

class Films {
  add = asyncHandler(async (req, res) => {
    const { title, rating } = req.body;

    // console.log(title, rating);

    if (!title || !rating) {
      res.status(400);
      throw new Error("Provide all files");
    }

    const film = await FilmsModel.create({
      ...req.body,
    });
    res.status(201).json({
      code: 201,
      message: "success",
      data: film,
    });
  });

  getAll = asyncHandler(async (req, res) => {
    const films = await FilmsModel.find({}, "-createdAt -updatedAt");
    res.status(200).json({
      code: 200,
      message: "success",
      data: films,
      qty: films.length,
    });
  });

  getById = asyncHandler(async (req, res) => {
    const film = await FilmsModel.findById(
      req.params.id,
      "-createdAt -updatedAt"
    );
    if (!film) {
      res.status(404);
      throw new Error("Id not found");
    }
    res.status(200).json({
      code: 200,
      message: "success",
      data: film,
    });
  });

  update = asyncHandler(async (req, res) => {
    const film = await FilmsModel.findByIdAndUpdate(
      req.params.id,
      { ...req.body },
      { new: true }
    );
    if (!film) {
      res.status(404);
      throw new Error("Id not found");
    }
    res.status(200).json({
      code: 200,
      message: "success",
      data: film,
    });
  });

  delete = asyncHandler(async (req, res) => {
    const film = await FilmsModel.findByIdAndRemove(req.params.id);
    if (!film) {
      res.status(404);
      throw new Error("Id not found");
    }
    res.status(200).json({
      code: 200,
      message: "success",
      data: film,
    });
  });
}

module.exports = new Films();

// повністю валідний існуючий ID - 64dfac4c3b7da23483c0ef1e
// повністю валідний не існуючий ID - 44dfac4c3b7da23483c0ef1e
// не валідний ID - 100
// 64dfbadaec2ff5771ffbd919
