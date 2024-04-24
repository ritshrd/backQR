const Stand7 = require("../models/stand7.model");


const addStand7 = async (req, res) => {
  try {
    const stand7 = await Stand7.create(req.body);
    res.status(200).json(stand7);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getStands7 = async (req, res) => {
  try {
    const stands7 = await Stand7.find({});
    const count = await Stand7.countDocuments();
    res.header("Content-Type", "application/json");
    res.json({ stands7, count });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



module.exports = {

  addStand7,
  getStands7,

};
