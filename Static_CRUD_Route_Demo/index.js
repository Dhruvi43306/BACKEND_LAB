import express from "express"
import bodyParser from "body-parser"
import studentRouter from "./Router/student.route.js"

const app = express()

// Middleware
app.use(bodyParser.json())

// Routes
app.use("/students", studentRouter)

// Default route
app.get("/", (req, res) => {
    res.send("Student API is running ")
})

// Server
app.listen(3000, () => {
    console.log("Server started on port 3000")
})
