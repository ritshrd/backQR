const Stand9 = require("../models/stand9.model");


const addStand9 = async (req, res) => {
  try {
    const stand9 = await Stand9.create(req.body);
    res.status(200).json(stand9);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getStands9 = async (req, res) => {
  try {
    const stands9 = await Stand9.find({});
    const count = await Stand9.countDocuments();
    res.header("Content-Type", "application/json");
    res.json({ stands9, count });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



module.exports = {

  addStand9,
  getStands9,

};
