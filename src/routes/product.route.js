const express = require('express');
const app  = express.Router();
const controller = require('../controllers/product.controller.js')

// match GET localhost:5000/products
app.get("/",controller.get);
  
  // match GET localhost:5000/products
  app.get("/:id",controller.getById);
  
  app.post("/",controller.create);

module.exports = app;