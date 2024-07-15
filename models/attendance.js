import mongoose from "mongoose";

const schema = new mongoose.Schema({
  Buname: {
    type: String,
  },
  RoomNo: {
    type: Number,
  },
  Absentees: [
    {
      type: String,
    },
  ],
});

export const model = mongoose.model("Attendance", schema);
