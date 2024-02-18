const express = require('express');
const { setBoxes, getBoxes, editBoxes, deleteBoxes } = require('./boxes.controller');
const router = express.Router();
const auth = require('./auth');

//READ
router.get("/", auth.required, getBoxes);

//CREATE
router.post("/", auth.required, setBoxes);

//UPDATE
router.put("/:id", auth.required, editBoxes);

//DELETE
router.delete("/:id", auth.required, deleteBoxes);

module.exports = router;