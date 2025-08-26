const express = require('express')
const app = express();
const productRoute = require("./route/productRoute");
const port = 3000;
app.use(express.json());

app.use("/product", productRoute);


//start the server 
app.listen(port, ()=> {
    console.log(`Server is running on port http://localhost:${port}`);
});