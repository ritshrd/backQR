const Stand1 = require("../models/stand1.model");


const addStand1 = async (req, res) => {
  try {
    const stand1 = await Stand1.create(req.body);
    res.status(200).json(stand1);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getStands1 = async (req, res) => {
  try {
    const stands1 = await Stand1.find({});
    const count = await Stand1.countDocuments();
    res.header("Content-Type", "application/json");
    res.json({ stands1, count });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



module.exports = {

  addStand1,
  getStands1,

};
