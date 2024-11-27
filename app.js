// dot environment configuration
require("dotenv").config();

// importing modules and declaring api's
const express = require("express");
const PORT = process.env.APP_PORT || 3000;
const app = express();
const productApi = require("./routes/products");

// middlewares to perform operations
app.use(express.json());
app.use("/api/products", productApi);

// server listening on port
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
