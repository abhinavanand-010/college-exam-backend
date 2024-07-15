import mongoose from "mongoose";

const schema = new mongoose.Schema({
  User: {
    type: String,
  },
  Password: {
    type: String,
  },
  Role: {
    type: String,
  },
});

export const model = mongoose.model("Login", schema);
