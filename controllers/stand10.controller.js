const Stand10 = require("../models/stand10.model");


const addStand10 = async (req, res) => {
  try {
    const stand10 = await Stand10.create(req.body);
    res.status(200).json(stand10);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getStands10 = async (req, res) => {
  try {
    const stands10 = await Stand10.find({});
    const count = await Stand10.countDocuments();
    res.header("Content-Type", "application/json");
    res.json({ stands10, count });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



module.exports = {

  addStand10,
  getStands10,

};
