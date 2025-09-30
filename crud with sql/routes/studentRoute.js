const express = require("express");
const router = express.Router();
const studentController = require("../controllers/studentController");

// ✅ Make sure these are functions
router.post("/students", studentController.createStudent);
router.get("/students", studentController.getStudents);
router.get("/students/:id", studentController.getStudentById);
router.put("/students/:id", studentController.updateStudent);
router.delete("/students/:id", studentController.deleteStudent);

module.exports = router;
