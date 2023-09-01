const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, "DB: email is required"],
    },
    password: {
      type: String,
      required: [true, "DB: email is required"],
    },
    name: {
      type: String,
      default: "Sarah O'Konnor",
    },
    token: {
      type: String,
      default: null,
    },
    roles: [
      {
        type: String,
        ref: "roles",
      },
    ],
  },
  { timestamps: true, versionKey: false }
);

module.exports = model("user", UserSchema);
