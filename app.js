const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Συνδέσου με MongoDB
mongoose.connect('mongodb://localhost:27017/crud-app', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("❌ MongoDB error:", err));

// Για να διαβάζει JSON στο body των requests
app.use(express.json());

// Χρησιμοποίησε τα routes
const productRoutes = require('./routes/product.route');
app.use('/api', productRoutes);

// Ξεκίνα τον server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
