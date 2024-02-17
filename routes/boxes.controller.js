const BoxModel = require('../models/box.model');


module.exports.setBoxes = async (req, res) => {
    if (!req.body.message){
        res.status(400).json({ message: "Le message est vide" });
    }
}

/* module.exports.setBoxes = async (req, res) => {
    try {
        const newBoxes = await BoxModel.create({
            x: req.body.x,
            y: req.body.y,
            isAllowed: req.body.isAllowed,
            maze: req.body.maze
        });
        res.status(201).json(newBoxes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
} */