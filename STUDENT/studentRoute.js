const express = require("express");
const app = express();
const Student = require("./studentSechma");

app.use(express.json());

// GET all students
app.get("/", async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
});

// GET student by ID
app.get("/:id", async (req, res) => {
  try {
    const studentid = await Student.findById(req.params.id);
    if (!student)
      return res.status(404).json("Student Not Found!");
    res.json(studentid);
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
});

// UPDATE student
app.put("/:id", async (req, res) => {
  try {
    const updatestudent = await Student.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!student)
      return res.status(404).json("Student Not Found!");
    res.json(updatestudent);
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
});

// DELETE student
app.delete("/:id", async (req, res) => {
  try {
    const deletestudent = await Student.findByIdAndDelete(req.params.id);
    if (!deletestudent)
      return res.status(404).json("Student Not Found!");
    res.status(204).send("Student are Deleted");
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
});

// CREATE students (ARRAY)
app.post("/", async (req, res) => {
  try {
    const students = await Student.insertMany(req.body);
    res.status(201).json(students);
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
});

module.exports = app;
