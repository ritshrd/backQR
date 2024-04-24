const Stand4 = require("../models/stand4.model");


const addStand4 = async (req, res) => {
  try {
    const stand4 = await Stand4.create(req.body);
    res.status(200).json(stand4);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getStands4 = async (req, res) => {
  try {
    const stands4 = await Stand4.find({});
    const count = await Stand4.countDocuments();
    res.header("Content-Type", "application/json");
    res.json({ stands4, count });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



module.exports = {

  addStand4,
  getStands4,

};
