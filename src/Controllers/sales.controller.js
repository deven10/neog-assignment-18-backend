const Sales = require("../Models/Sales");

// ----------------------------
// for creating new sale
async function addSale(salesDetails) {
  try {
    const newSale = new Sales(salesDetails);
    const savedSale = await newSale.save();
    return savedSale;
  } catch (e) {
    throw e;
  }
}

// ----------------------------
// for getting all sales
async function findAllSales() {
  try {
    const sales = await Sales.find();
    return sales;
  } catch (e) {
    throw e;
  }
}

// --------------------------------------
// delete an existing sale
async function deleteSale(saleId) {
  try {
    const sale = await Sales.findByIdAndDelete(saleId);
    return sale;
  } catch (e) {
    throw e;
  }
}

module.exports = { addSale, findAllSales, deleteSale };

// ----
// addSale({
//   name: "Football Shoes",
//   price: 750,
//   quantity: 5,
// });

// findAllSales();

// deleteSale("6581e67aac04766d1771e916");
