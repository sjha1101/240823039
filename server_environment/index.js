const express = require('express')
const app = express();
app.get('/',(req,res)=>{
    res.send('Hi khushali')
});
app.listen(80,()=>{
    console.log('server is running at http://localhost:80')
})