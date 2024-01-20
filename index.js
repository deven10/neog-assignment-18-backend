require("./db");

const inventoryRouter = require("./src/Routes/inventory.routes");
const salesRouter = require("./src/Routes/sales.routes");

const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/inventory", inventoryRouter);
app.use("/api/sales", salesRouter);

app.get("/", (req, res) => {
  res.send("<h1> Assignment 18 neoG </h1>");
});

app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).json({ error: "Something went wrong" });
});

app.use((req, res) => {
  res.status(404).json({ error: "No route found lol!" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
