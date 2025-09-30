const express = require("express");
const studentRoute = require("./routes/studentRoute");
const app = express();
const PORT = 3000;
app.use(express.json());

app.use("/student", studentRoute);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}/`);
});
<<<<<<< HEAD
<<<<<<< HEAD


=======
<<<<<<< HEAD
=======


>>>>>>> d0db2e3 (Multer)
>>>>>>> 5913d90 (crud with sql)
=======


>>>>>>> d0db2e3e61260da7834678ed5825d13082d6c409
