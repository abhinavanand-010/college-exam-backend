/*import express from "express";
import dotenv from "dotenv";
// import * as path from "path";
import { model as classRoomModel} from "./models/classRoom.js";
import { model as classRoomModel} from "./models/classRoom.js";
import { model as studentModel} from "./models/student.js";
import { model as teacherModel} from "./models/teacherData.js";
import { model as timetableModel} from "./models/timetable.js";
import connectDB from "./config/db.js";
// import cors from "cors";
// import questionRouter from "./routes/questionRoutes";
dotenv.config();
const app = express();
app.use(express.json())
import { model as studentModel} from "./models/student.js";
import { model as teacherModel} from "./models/teacherData.js";
import { model as timetableModel} from "./models/timetable.js";
import connectDB from "./config/db.js";
// import cors from "cors";
// import questionRouter from "./routes/questionRoutes";
dotenv.config();
const app = express();
app.use(express.json())
connectDB();
const PORT = process.env.PORT || "6000";
app.listen(PORT, () => {
  console.log(`Connected to Port ${PORT}`);
});

app.post("/api/classRoom",async(req,res)=>{
    try {
        //console.log(req.body)
        const { buildingName, floorNo, roomNo, capacity, type} = req.body;
        const newClassRoomData = new model({
            buildingName,
            floorNo,
            roomNo,
            capacity,
            type
        })
        await newClassRoomData.save();
        res.status(200).json({message:"success",json:newClassRoomData})
        
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Internal Server Error"})
        
    }

})


app.post("/api/Teacher",async(req,res)=>{
    try {
        console.log(req.body)
        const { Name, DOB, Gender, Age, Qualification, PhoneNo, Subjects} = req.body;
        const newTeacherData = new model({
            Name,
            DOB,
            Gender,
            Age,
            Qualification,
            PhoneNo,
            Subjects
        })
        await newTeacherData.save();
        res.status(200).json({message:"success",json:newTeacherData})
        
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Internal Server Error"})
        
    }

})

app.post("/api/Student",async(req,res)=>{
    try {
        console.log(req.body)
        const { SName, SDOB, Division, USN, Rno, Sem, Course} = req.body;
        const newStudentData = new model({
            SName,
            SDOB,
            Division,
            USN,
            Rno,
            Sem,
            Course
        })
        await newStudentData.save();
        res.status(200).json({message:"success",json:newStudentData})
        
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Internal Server Error"})
        
    }

})

app.post("/api/Timetable",async(req,res)=>{
    try {
        console.log(req.body)
        const { BName, RoomNo, Date, Subject, Sem, Time} = req.body;
        const newTimetableData = new model({
            BName,
            RoomNo,
            Date,
            Subject,
            Sem,
            Time
        })
        await newTimetableData.save();
        res.status(200).json({message:"success",json:newTimetableData})
        
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Internal Server Error"})
        
    }

})
*/
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { ClassRoomModel } from "./models/classRoom.js";
import { model as StudentModel } from "./models/student.js";
import { model as TeacherModel } from "./models/teacherData.js";
import { model as TimetableModel } from "./models/timetable.js";
import { model as AttendanceModel } from "./models/attendance.js";
import { model as LoginDataModel } from "./models/login.js";

import connectDB from "./config/db.js";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
connectDB();
const PORT = process.env.PORT || "6000";
app.listen(PORT, () => {
  console.log(`Connected to Port ${PORT}`);
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/api/Login", async (req, res) => {
  try {
    console.log(req.body);
    const { User, Password, Role } = req.body;
    const newLoginData = new LoginDataModel({
      User,
      Password,
      Role,
    });
    await newLoginData.save();
    res.status(200).json({ message: "success", json: newLoginData });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.post("/api/classRoom", async (req, res) => {
  try {
    const { buildingName, floorNo, roomNo, capacity, type } = req.body;
    const newClassRoomData = await ClassRoomModel.create({
      buildingName,
      floorNo,
      roomNo,
      capacity,
      type,
    });
    res.status(200).json({ message: "success", data: newClassRoomData });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.post("/api/Teacher", async (req, res) => {
  try {
    const { Name, DOB, Gender, Age, Qualification, PhoneNo, Subjects } =
      req.body;
    const newTeacherData = new TeacherModel({
      Name,
      DOB,
      Gender,
      Age,
      Qualification,
      PhoneNo,
      Subjects,
    });
    await newTeacherData.save();
    res.status(200).json({ message: "success", json: newTeacherData });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.post("/api/Student", async (req, res) => {
  try {
    const { SName, Division, USN, Rno, Sem, Branch } = req.body;
    const newStudentData = new StudentModel({
      SName,
      Division,
      USN,
      Rno,
      Sem,
      Branch,
    });
    await newStudentData.save();
    res.status(200).json({ message: "success", json: newStudentData });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.post("/api/Timetable", async (req, res) => {
  try {
    const { BName, RoomNo, Date, Subject, Sem, Time } = req.body;
    const newTimetableData = new TimetableModel({
      BName,
      RoomNo,
      Date,
      Subject,
      Sem,
      Time,
    });
    await newTimetableData.save();
    res.status(200).json({ message: "success", json: newTimetableData });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

app.post("/api/Attendance", async (req, res) => {
  try {
    const { Buname, RoomNo, Absentees } = req.body;
    const newAttendanceData = new AttendanceModel({
      Buname,
      RoomNo,
      Absentees,
    });
    await newAttendanceData.save();
    res.status(200).json({ message: "success", json: newAttendanceData });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});
//Alloting students to each class/lab
app.post("/api/AssignStudentsToClassrooms", async (req, res) => {
  try {
    const assignedStudents = await ClassRoomModel.aggregate([
      {
        $lookup: {
          from: "students", // Assuming the students collection name is 'students'
          let: { roomNo: "$roomNo", semester: "$Sem" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $and: [
                    { $eq: ["$roomNo", "$$roomNo"] },
                    { $lte: ["$Rno", { $multiply: [2, "$semester"] }] },
                  ],
                },
              },
            },
          ],
          as: "students",
        },
      },
      {
        $addFields: {
          students: {
            $filter: {
              input: "$students",
              as: "student",
              cond: {
                $and: [{ $lte: ["$$student.Rno", { $multiply: [2, "$Sem"] }] }],
              },
            },
          },
        },
      },
      {
        $project: {
          _id: 0,
          Rno: {
            $reduce: {
              input: "$students.Rno",
              initialValue: "",
              in: { $concat: ["$$value", ",", "$$this"] },
            },
          },
          ClassRoom: {
            buildingName: 1,
            roomNo: 1,
            Sem: 1, // Assuming a fixed semester for illustration, you can modify this based on your requirements
          },
        },
      },
    ]);

    res.status(200).json({ message: "success", data: assignedStudents });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

//Generate the ISA allocating class rooms and labs
app.get("/api/ClassRooms", async (req, res) => {
  try {
    const classRooms = await ClassRoomModel.find({});
    res.status(200).json({ message: "success", data: classRooms });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

//Teacher allocation to each class/lab

app.get("/api/TeacherAllocation", async (req, res) => {
  try {
    const teacherAllocationDetails = await TimetableModel.aggregate([
      {
        $lookup: {
          from: "Teacher", // Assuming the teachers collection name is 'Teacher'
          localField: "Subject",
          foreignField: "Subjects",
          as: "faculty",
        },
      },
      {
        $unwind: "$faculty",
      },
      {
        $group: {
          _id: {
            Semester: "$Sem",
            Division: "$Division",
          },
          Teachers: {
            $addToSet: {
              Name: "$faculty.Name",
              Subjects: "$Subject",
            },
          },
        },
      },
      {
        $project: {
          _id: 0,
          Semester: "$_id.Semester",
          Division: "$_id.Division",
          Teachers: 1,
        },
      },
    ]);

    res
      .status(200)
      .json({ message: "success", data: teacherAllocationDetails });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

//Fetch attendance details so that the user can download
app.get("/api/FetchAttendance", async (req, res) => {
  try {
    const attendanceData = await AttendanceModel.find({});
    res.status(200).json({ message: "success", data: attendanceData });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

//Fetch classroom collection
app.get("/api/FetchClassRoom", async (req, res) => {
  try {
    const classRoomData = await ClassRoomModel.find({});
    res.status(200).json({ message: "success", data: classRoomData });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

//Fetch student collection
app.get("/api/FetchStudent", async (req, res) => {
  try {
    const studentData = await StudentModel.find({});
    res.status(200).json({ message: "success", data: studentData });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

//Fetch Teacher collection
app.get("/api/FetchTeacher", async (req, res) => {
  try {
    const teacherData = await TeacherModel.find({});
    res.status(200).json({ message: "success", data: teacherData });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

//Fetch timetable collection
app.get("/api/FetchTimetable", async (req, res) => {
  try {
    const timetableData = await TimetableModel.find({});
    res.status(200).json({ message: "success", data: timetableData });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

import multer from "multer";
import csvParser from "csv-parser";
import fs from "fs";
import { Readable } from "stream";

const storage = multer.memoryStorage(); // Store the file in memory
const upload = multer({ storage: storage });

app.post("/api/uploadStudents", upload.single("file"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded." });
  }

  const results = [];

  const readableStream = new Readable();
  readableStream.push(req.file.buffer);
  readableStream.push(null);

  readableStream
    .pipe(csvParser())
    .on("data", (data) => results.push(data))
    .on("end", () => {
      StudentModel.insertMany(results)
        .then(() => {
          res.status(200).json({
            message:
              "CSV file uploaded and data saved to the Student collection.",
          });
        })
        .catch((error) => {
          console.log(error);
          res.status(500).json({ message: "Internal Server Error" });
        });
    });
});

app.post("/api/uploadTeachers", upload.single("file"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded." });
  }

  const results = [];

  const readableStream = new Readable();
  readableStream.push(req.file.buffer);
  readableStream.push(null);

  readableStream
    .pipe(csvParser())
    .on("data", (data) => results.push(data))
    .on("end", () => {
      TeacherModel.insertMany(results)
        .then(() => {
          res.status(200).json({
            message:
              "CSV file uploaded and data saved to the Teacher collection.",
          });
        })
        .catch((error) => {
          console.log(error);
          res.status(500).json({ message: "Internal Server Error" });
        });
    });
});

// // uploadClassrooms.js
// const multer = require("multer");
// const csvParser = require("csv-parser");
// const fs = require("fs");

// const upload = multer({ dest: "uploads/" });

app.post("/api/uploadClassrooms", upload.single("file"), (req, res) => {
  console.log(req.file);
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded." });
  }

  const results = [];

  const readableStream = new Readable();
  readableStream.push(req.file.buffer);
  readableStream.push(null);

  readableStream
    .pipe(csvParser())
    .on("data", (data) => results.push(data))
    .on("end", () => {
      ClassRoomModel.insertMany(results)
        .then(() => {
          res.status(200).json({
            message:
              "CSV file uploaded and data saved to the Classroom collection.",
          });
        })
        .catch((error) => {
          console.log(error);
          res.status(500).json({ message: "Internal Server Error" });
        });
    });
});

// // uploadTimetable.js
// const multer = require("multer");
// const csvParser = require("csv-parser");
// const fs = require("fs");

// const upload = multer({ dest: "uploads/" });

app.post("/api/uploadTimetable", upload.single("file"), (req, res) => {
  const results = [];

  fs.createReadStream(req.file.path)
    .pipe(csvParser())
    .on("data", (data) => results.push(data))
    .on("end", () => {
      TimetableModel.insertMany(results)
        .then(() => {
          res.status(200).json({
            message:
              "CSV file uploaded and data saved to the Timetable collection.",
          });
        })
        .catch((error) => {
          console.log(error);
          res.status(500).json({ message: "Internal Server Error" });
        });
    });
});
