const express = require("express");

const salesRouter = express.Router();
salesRouter.use(express.json());

const {
  addSale,
  findAllSales,
  deleteSale,
} = require("../Controllers/sales.controller");

salesRouter.post("/", async (req, res) => {
  try {
    const body = req.body;
    const sale = await addSale(body);
    res.status(201).json({ message: "New Sale added successfully", sale });
  } catch (e) {
    res.status(500).json({ message: e });
  }
});

salesRouter.get("/", async (req, res) => {
  try {
    const sales = await findAllSales();
    if (sales.length > 0) {
      res.status(200).json({ message: "Sales fetched successfully", sales });
    } else {
      res.status(204).json({ message: "No Sale found" });
    }
  } catch (e) {
    res.status(500).json({ message: e });
  }
});

salesRouter.delete("/:saleId", async (req, res) => {
  try {
    const saleId = req.params.saleId;
    const sale = await deleteSale(saleId);
    if (sale) {
      res.status(200).json({ message: "Sale deleted successfully", sale });
    } else {
      res.status(204).json({ message: "No Sale found" });
    }
  } catch (e) {
    res.status(500).json({ message: e });
  }
});

module.exports = salesRouter;
