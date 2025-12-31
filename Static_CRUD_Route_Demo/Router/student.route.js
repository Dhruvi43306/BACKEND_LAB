import { Router } from "express";

const router = Router();

const data = ["arjun", "bala", "darshan", "university"];

// GET all students
router.get("/", (req, res) => {
    res.json(data);
});

// GET student by id
router.get("/:id", (req, res) => {
    res.json(data[req.params.id]);
});

// ADD student
router.post("/add", (req, res) => {
    const studentName  = req.body;
    data.push(studentName);
    res.send("Student Created!");
});

// EDIT student
router.put("/edit/:id", (req, res) => {
    data[req.params.id] = req.body.studentName;
    res.send("Student Edited!");
});

// DELETE student
router.delete("/:id", (req, res) => {
    data.splice(req.params.id, 1);
    res.send("Student Deleted!");
});

export default router;
