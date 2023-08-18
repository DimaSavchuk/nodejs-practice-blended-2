const { Schema, model } = require("mongoose");

const filmsSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "DB: title is required"],
    },
    year: {
      type: Number,
      default: 2000,
    },
    director: {
      type: String,
      default: "Dmytro Savchuk",
    },
    rating: {
      type: Number,
      required: [true, "DB: rating is required"],
    },
  },
  { timestamps: true, versionKey: false }
);

module.exports = model("film", filmsSchema);
