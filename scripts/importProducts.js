const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const Product = require('../models/product.model');

mongoose.connect('mongodb://localhost:27017/crud-app', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("✅ Connected with MongoDB");
  importData();
}).catch(err => {
  console.error("❌ MongoDB connection error:", err);
});

async function importData() {
  try {
    const dataPath = path.join(__dirname, '../data/Products.json');
    const rawData = fs.readFileSync(dataPath);
    const products = JSON.parse(rawData);

    await Product.insertMany(products);
    console.log("✅ Data inserted succesfuly!");
    mongoose.disconnect();
  } catch (err) {
    console.error("❌ Error during data import:", err);
  }
}
