import mongoose from "mongoose";

const schema = new mongoose.Schema({
  BName: {
    type: String,
  },
  RoomNo: {
    type: String,
  },
  Date: {
    type: String,
  },
  Subject: {
    type: String,
  },
  Sem: {
    type: Number,
  },
  Time: {
    type: String,
  },
});

export const model = mongoose.model("Timetable", schema);
