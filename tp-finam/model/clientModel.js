const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema({
  nom: String,
  prenom: String,
  age: Number,
  email: String,
  telephone: String,
});

const Client = mongoose.model("Clients", clientSchema);
module.exports = Client;
