
exports.index = (req,res) =>{
    res.send("Welcome");
}

exports.show = (req,res)=>{
    res.send(`Showing data for id: ${req.body.id}`);
}

let data =[
    {id:1,name:'abc',price:12},
    {id:2,name:'abc',price:122}
]
exports.store = (req,res)=>{
    res.send(data);
}

exports.update = (req,res)=>{
    res.send(`Product is udated for id: 
    product id: ${req.body.id},
    product name:${req.body.name},
    product price:${req.body.price}`);
}

exports.delete = (req,res)=>{
    res.send(`Product is deleted successfully: 
    the deleted id is :${req.body.id}`);
}