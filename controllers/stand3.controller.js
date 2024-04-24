const Stand3 = require("../models/stand3.model");


const addStand3 = async (req, res) => {
  try {
    const stand3 = await Stand3.create(req.body);
    res.status(200).json(stand3);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getStands3 = async (req, res) => {
  try {
    const stands3 = await Stand3.find({});
    const count = await Stand3.countDocuments();
    res.header("Content-Type", "application/json");
    res.json({ stands3, count });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



module.exports = {

  addStand3,
  getStands3,

};
