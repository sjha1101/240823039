 const path = require("path")
 const moment = require("moment");
 //extension of the file
 console.log(path.extname("myfile.txt"));
 //path of the file
 console.log(path.dirname(__filename));
 
 console.log(moment().format("DD-MM-YYYY HH:MM"))
 console.log(moment().add(7,"days").format("DD--MM-YYYY HH::MM"));
 console.log(moment().format("deled"))