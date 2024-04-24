const Stand8 = require("../models/stand8.model");


const addStand8 = async (req, res) => {
  try {
    const stand8 = await Stand8.create(req.body);
    res.status(200).json(stand8);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getStands8 = async (req, res) => {
  try {
    const stands8 = await Stand8.find({});
    const count = await Stand8.countDocuments();
    res.header("Content-Type", "application/json");
    res.json({ stands8, count });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



module.exports = {

  addStand8,
  getStands8,

};
