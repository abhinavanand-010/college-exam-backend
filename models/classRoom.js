import mongoose from "mongoose";

const schema = new mongoose.Schema({
  buildingName: {
    type: String,
  },
  floorNo: {
    type: String,
  },
  roomNo: {
    type: String,
  },
  capacity: {
    type: String,
  },
  type: {
    type: String,
  },
});

export const ClassRoomModel = mongoose.model("ClassRoom", schema);
