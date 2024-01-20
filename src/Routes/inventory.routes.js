const express = require("express");

const inventoryRouter = express.Router();
inventoryRouter.use(express.json());

const {
  addInventory,
  findAllInventories,
  deleteInventory,
  updateInventory,
} = require("../Controllers/inventory.controller");

// creating a new inventory
inventoryRouter.post("/", async (req, res) => {
  try {
    const body = req.body;
    const inventory = await addInventory(body);
    res
      .status(201)
      .json({ message: "New Inventory added successfully", inventory });
  } catch (e) {
    res.status(500).json({ message: e });
  }
});

// fetching all inventories
inventoryRouter.get("/", async (req, res) => {
  try {
    const inventories = await findAllInventories();
    if (inventories.length > 0) {
      res
        .status(200)
        .json({ message: "Inventories fetched successfully", inventories });
    } else {
      res.status(204).json({ message: "No Inventory found" });
    }
  } catch (e) {
    res.status(500).json({ message: e });
  }
});

// updating a particular inventory
inventoryRouter.post("/:inventoryId", async (req, res) => {
  try {
    const inventoryId = req.params.inventoryId;
    const body = req.body;
    const inventory = await updateInventory(inventoryId, body);
    if (inventory) {
      res
        .status(200)
        .json({ message: "Inventory updated successfully", inventory });
    } else {
      res.status(204).json({ message: "No Inventory found" });
    }
  } catch (e) {
    res.status(500).json({ message: e });
  }
});

// deleting a particular inventory
inventoryRouter.delete("/:inventoryId", async (req, res) => {
  try {
    const inventoryId = req.params.inventoryId;
    const inventory = await deleteInventory(inventoryId);
    if (inventory) {
      res
        .status(200)
        .json({ message: "Inventory deleted successfully", inventory });
    } else {
      res.status(204).json({ message: "No Inventory found" });
    }
  } catch (e) {
    res.status(500).json({ message: e });
  }
});

module.exports = inventoryRouter;
