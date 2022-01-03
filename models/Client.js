const mongoose = require("mongoose");

const clientSchema = mongoose.Schema({
  nom: { type: "string", required: true },
  prenom: { type: "string", required: true },
  adresse: {
    rue: { type: "string", required: true },
    numero: { type: "number", required: true },
    boite: { type: "number", required: true },
    ville: { type: "string", required: true },
    pays: { type: "string", required: true },
  },
  email: { type: "string", required: true, unique: true },
  password: { type: "string", required: true },
});

module.exports = mongoose.model("Client", clientSchema);
