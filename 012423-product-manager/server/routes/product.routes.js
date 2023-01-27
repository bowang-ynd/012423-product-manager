const express = require("express");
const productRouter = express.Router();

const {
    createProduct,
    findAllProductsSorted,
    findOneProductByID,
    updateOneProduct,
    deleteOneProduct,
} = require("../controllers/product.controller");

productRouter
    .route('/')
    .get(findAllProductsSorted)
    .post(createProduct);

productRouter
    .route('/:id')
    .get(findOneProductByID)
    .put(updateOneProduct)
    .delete(deleteOneProduct);

module.exports = productRouter;