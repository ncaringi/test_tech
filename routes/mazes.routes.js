const express = require('express');
const { setMazes, getMazes, editMazes, deleteMazes } = require('./mazes.controller');
const router = express.Router();
const auth = require('./auth');

//READ
router.get("/", auth.required, getMazes);

//CREATE
router.post("/", auth.required, setMazes);

//UPDATE
router.put("/:id", auth.required, editMazes);

//DELETE
router.delete("/:id", auth.required, deleteMazes);

module.exports = router;