const express = require("express");
const productController = require("../controller/produtController");
const Router = express.Router();

Router.get('/index',productController.index);
Router.get('/show/:id',productController.show);
Router.post('/store',productController.store);
Router.put('/update/:id',productController.update);
Router.patch('/delete/:id',productController.delete);
module.exports = Router;