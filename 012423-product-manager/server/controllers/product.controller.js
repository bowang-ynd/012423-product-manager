const Product = require("../models/product.model");

/* CREATE */
const createProduct = (req, res) => {
    Product.create(req.body)
        .then((product) => res.status(201).json(product))
        .catch((err) => res.status(400).json(err));
};

/*  READ */
const findAllProductsSorted = (req, res) => {
    Product.find()
        .sort({ title: 1 })
        .collation({ locale: "en", caseLevel: true })
        .then((products) => res.status(200).json(products))
        .catch((err) => res.status(400).json(err));
};

const findOneProductByID = (req, res) => {
    const { id } = req.params;
    Product.findById(id)
        .then((product) => res.status(200).json(product))
        .catch((err) => res.status(400).json(err));
};

/* UPDATE */
const updateOneProduct = (req, res) => {
    const { id } = req.params;
    Product.findByIdAndUpdate(id, req.body, { new: true, runValidators: true })
        .then((product) => res.status(200).json(product))
        .catch((err) => res.status(400).json(err));
};

/* DELETE */
const deleteOneProduct = (req, res) => {
    const { id } = req.params;
    Product.findByIdAndDelete(id)
        .then((product) => res.status(200).json(product))
        .catch((err) => res.status(400).json(err));
};

module.exports = { createProduct, findAllProductsSorted, findOneProductByID, updateOneProduct, deleteOneProduct };
