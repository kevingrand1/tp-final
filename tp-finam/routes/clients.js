const express = require("express");
const router = express.Router();
const Client = require("../model/clientModel");

router.get("/", async (req, res, next) => {
  try {
    const clients = await Client.find({});
    res.render("clients", { title: "Clients", clients });
  } catch (err) {
    console.error(err);
    res.status(500).send("Erreur lors de la récupération des clients");
  }
});

// ajouter un client
router.post("/clients/add", (req, res) => {
  const client = {
    nom: req.body.nom,
    prenom: req.body.prenom,
    age: req.body.age,
    email: req.body.email,
    telephone: req.body.telephone,
  };
  const collection = db.collection("clients");
  collection.insertOne(client, (err, result) => {
    if (err) {
      console.log("Erreur lors de l'ajout du client", err);
      res.status(500).send("Erreur lors de l'ajout du client");
    } else {
      console.log("Client ajouté avec succès");
      res.status(200).send("Client ajouté avec succès");
    }
  });
});

// modifier un client
router.put("/clients/update/:id", (req, res) => {
    const id = req.params.id;
    const client = {
        nom: req.body.nom,
        prenom: req.body.prenom,
        age: req.body.age,
        email: req.body.email,
        telephone: req.body.telephone,
    };
    const collection = db.collection("clients");
    collection.updateOne({ _id: new ObjectID(id) }, { $set: client }, (err, result) => {
        if (err) {
            console.log("Erreur lors de la modification du client", err);
            res.status(500).send("Erreur lors de la modification du client");
        } else {
            console.log("Client modifié avec succès");
            res.status(200).send("Client modifié avec succès");
        }
    });
});

// supprimer un client
router.delete("/clients/delete/:id", (req, res) => {
  const id = req.params.id;
  const collection = db.collection("clients");
  collection.deleteOne({ _id: new ObjectID(id) }, (err, result) => {
    if (err) {
      console.log("Erreur lors de la suppression du client", err);
      res.status(500).send("Erreur lors de la suppression du client");
    } else {
      console.log("Client supprimé avec succès");
      res.status(200).send("Client supprimé avec succès");
    }
  });
});

module.exports = router;