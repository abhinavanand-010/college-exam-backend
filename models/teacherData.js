import mongoose from "mongoose";
const schema = new mongoose.Schema({
  Name: {
    type: String,
  },
  ID: {
    type: String,
  },
  Branch: {
    type: String,
  },
  Subject: {
    type: String,
  },
  Semester: {
    type: String,
  },
  Division: {
    type: String,
  },
});

export const model = mongoose.model("Teacher", schema);
