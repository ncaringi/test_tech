const BoxModel = require('../models/Box');


// CREATE
module.exports.setBoxes = async (req, res) => {
    try {
        const boxes = await BoxModel.create({
            x: req.body.x,
            y: req.body.y,
            isAllowed: req.body.isAllowed,
            maze: req.body.maze
        });
        res.status(201).json(boxes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// READ
module.exports.getBoxes = async (req, res) => {
    try {
        const boxes = await BoxModel.find();
        res.status(200).json(boxes);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// UPDATE
module.exports.editBoxes = async (req, res) => {
    try {
        const boxes = await BoxModel.findById(req.params.id);

        const updateBoxes = await BoxModel.findByIdAndUpdate(
            boxes,
            req.body,
            {new: false}
            );

        res.status(200).json(updateBoxes);

    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// DELETE
module.exports.deleteBoxes = async (req, res) => {
    try {
        const boxes = await BoxModel.findById(req.params.id);
        await BoxModel.deleteOne(boxes);
        res.status(200).json({ message: "donnée supprimée : " + req.params.id});
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


