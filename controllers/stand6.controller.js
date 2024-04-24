const Stand6 = require("../models/stand6.model");


const addStand6 = async (req, res) => {
  try {
    const stand6 = await Stand6.create(req.body);
    res.status(200).json(stand6);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getStands6 = async (req, res) => {
  try {
    const stands6 = await Stand6.find({});
    const count = await Stand6.countDocuments();
    res.header("Content-Type", "application/json");
    res.json({ stands6, count });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



module.exports = {

  addStand6,
  getStands6,

};
