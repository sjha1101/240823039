const express = require("express");
const bodyParser = require("body-parser");
const studentRoutes = require("./routes/studentRoute");
const db = require("./db");
const Student = require("./models/Student"); // Import model so table is created

const app = express();
app.use(bodyParser.json());

// Routes
app.use("/api", studentRoutes);

const PORT = 5000;
db.sync().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
