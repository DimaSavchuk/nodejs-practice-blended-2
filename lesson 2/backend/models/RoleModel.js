const { Schema, model } = require("mongoose");

const RoleSchema = new Schema(
  {
    title: {
      type: String,
      default: "USER",
    },
  },
  { timestamps: true, versionKey: false }
);

module.exports = model("roles", RoleSchema);
