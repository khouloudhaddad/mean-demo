const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const productsRoutes = require('./backend/routes/products.route')
const app = express();
app.use(express.json());
app.use(cors());
app.use("/productsAPI", productsRoutes);

mongoose
  .connect("mongodb+srv://khouloud:KfuFQux9luhOIYys@cluster0.4voiiho.mongodb.net/yummy?retryWrites=true&w=majority")
  .then(() => {
    console.log("Database Connected")
  })
  .catch(() => {
    console.log("An error has occured!!")
  })

app.listen(3000, () => {
    console.log("Server running on port 3000...")
  })

