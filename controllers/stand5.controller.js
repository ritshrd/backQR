const Stand5 = require("../models/stand5.model");


const addStand5 = async (req, res) => {
  try {
    const stand5 = await Stand5.create(req.body);
    res.status(200).json(stand5);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getStands5 = async (req, res) => {
  try {
    const stands5 = await Stand5.find({});
    const count = await Stand5.countDocuments();
    res.header("Content-Type", "application/json");
    res.json({ stands5, count });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



module.exports = {

  addStand5,
  getStands5,

};
