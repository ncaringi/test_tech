const express = require('express');
const { setBoxes } = require('./boxes.controller');
const router = express.Router();


//READ
router.get("/", (req, res) => {
    console.log("GET réussi avec succès")
    res.json({ message: "Voici toutes les données"});
});

//CREATE
router.post("/", setBoxes);

//UPDATE
router.put("/:id", (req, res) => {
    console.log("PUT réussi avec succès")
    console.log(req.body);
    res.json({ message: "donnée ajoutée : " + req.params.id});
});

//DELETE
router.delete("/:id", (req, res) => {
    console.log("DELETE réussi avec succès")
    console.log(req.body);
    res.json({ message: "donnée supprimée : " + req.params.id});
});

module.exports = router;