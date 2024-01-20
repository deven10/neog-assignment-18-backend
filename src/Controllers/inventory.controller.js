const Inventory = require("../Models/Inventory");

// ----------------------------
// for creating new inventory
async function addInventory(inventoryDetails) {
  try {
    const newInventory = new Inventory(inventoryDetails);
    const savedInventory = await newInventory.save();
    return savedInventory;
  } catch (e) {
    throw e;
  }
}

// ----------------------------
// for getting all inventories
async function findAllInventories() {
  try {
    const inventories = await Inventory.find();
    return inventories;
  } catch (e) {
    throw e;
  }
}

// ----------------------------
// for updating an inventory
async function updateInventory(inventoryId, inventoryDetails) {
  try {
    const updatedInventory = await Inventory.findByIdAndUpdate(
      inventoryId,
      inventoryDetails,
      { new: true, runValidators: true }
    );
    return updatedInventory;
  } catch (e) {
    throw e;
  }
}

// --------------------------------------
// delete an existing inventory
async function deleteInventory(inventoryId) {
  try {
    const inventory = await Inventory.findByIdAndDelete(inventoryId);
    return inventory;
  } catch (e) {
    throw e;
  }
}

module.exports = {
  addInventory,
  findAllInventories,
  deleteInventory,
  updateInventory,
};
