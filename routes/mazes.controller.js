const MazeModel = require('../models/Maze');


// CREATE
module.exports.setMazes = async (req, res) => {
    try {
        const mazes = await MazeModel.create({
            name: req.body.name,
            boxes: req.body.boxes
        });
        res.status(201).json(mazes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// READ
module.exports.getMazes = async (req, res) => {
    try {
        const mazes = await MazeModel.find();
        res.status(200).json(mazes);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// UPDATE
module.exports.editMazes = async (req, res) => {
    try {
        const mazes = await MazeModel.findById(req.params.id);

        const updateMazes = await MazeModel.findByIdAndUpdate(
            mazes,
            req.body,
            {new: false}
            );

        res.status(200).json(updateMazes);

    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// DELETE
module.exports.deleteMazes = async (req, res) => {
    try {
        const mazes = await MazeModel.findById(req.params.id);
        await MazeModel.deleteOne(mazes);
        res.status(200).json({ message: "donnée supprimée : " + req.params.id});
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


