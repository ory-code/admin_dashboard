const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  nom: { type: "string", required: true },
  description: { type: "string", required: true },
  prix: { type: "number", required: true },
  quantite: { type: "number", required: true },
  imageUrl: { type: "string", required: true },
});

module.exports = mongoose.model("Product", productSchema)