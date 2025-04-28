const Product = require('../models/product.model');

exports.findAll = async (req, res) => {
  try {
    const products = await Product.find();
    res.json({
      status: true,
      data: products
    });
  } catch (err) {
    res.status(500).json({ 
      status: false,
      data: {message: err.message }
    });
  }
};

exports.findOne = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ status: false,
    data: {message: "Not found" }
  });
    res.json({
      status: true,
      data: product 
    });
  } catch (err) {
    res.status(500).json({
      status: false,
      data: {message: err.message }
    });
  }
};

exports.create = async (req, res) => {
  try {

    console.log('create request body:', req.body);
    const newProduct = new Product(req.body);
    const saved = await newProduct.save();
    res.status(201).json({
      status: true,
      data: saved
    });
  } catch (err) {
    res.status(400).json({ 
      status: false,
      data: {message: err.message }
    });
  }
};

exports.update = async (req, res) => {
  try {
    const updated = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ 
      status: false,
      data: {message: "Not found" }
    });
    res.json({
      status:true,
      data:updated
    });
  } catch (err) {
    res.status(400).json({ 
      status: false,
      data: {message: err.message }
    });
  }
};

exports.delete = async (req, res) => {
  try {
    const deleted = await Product.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ 
      status: false,
      data: {message: "Not found" }
    });
    res.json({ 
      status: true,
      data: {message: "Deleted" }
    });
  } catch (err) {
    res.status(500).json({ 
      status: false,
      data: {message: err.message }
    });
  }
};
