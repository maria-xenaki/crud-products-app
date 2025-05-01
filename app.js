const express = require('express');
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const app = express();
const Product = require('./models/product.model');

require("dotenv").config();

const dbURI = process.env.NODE_ENV === 'test'
  ? process.env.MONGODB_URI_TEST
  : process.env.MONGODB_URI;

mongoose.connect(dbURI)
  .then(async () => {
    console.log("✅ MongoDB connected");

    if (process.env.NODE_ENV === 'test') {
  
      const productsPath = path.join(__dirname, 'data', 'products.json');
      const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf-8'));
  
      await Product.deleteMany({});
      await Product.insertMany(productsData);
     console.log('✅ Products loaded from JSON');
    }
  })
  .catch(err => console.error("❌ MongoDB error:", err));

app.use(express.json());
app.use(express.static('public'));

const productRoutes = require('./routes/product.route');
app.use('/api', productRoutes);

if (process.env.NODE_ENV !== 'test') {
  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}

module.exports = app;
