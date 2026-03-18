const express = require("express");
const cors = require("cors");
const productRoutes = require("./routes/productsRoute");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/product", productRoutes);

// Health check
app.get("/health", (req, res) => {
  res.send("API is working....");
});

// Server
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
