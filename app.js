const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://localhost:27017/crud-app', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("❌ MongoDB error:", err));

// import('open').then((open) => {
//   open('http://localhost:3000');
// });

app.use(express.json());
app.use(express.static('public'));

const productRoutes = require('./routes/product.route');
app.use('/api', productRoutes);


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
