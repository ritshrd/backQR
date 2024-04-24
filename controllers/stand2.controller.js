const Stand2 = require("../models/stand2.model");


const addStand2 = async (req, res) => {
  try {
    const stand2 = await Stand2.create(req.body);
    res.status(200).json(stand2);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getStands2 = async (req, res) => {
  try {
    const stands2 = await Stand2.find({});
    const count = await Stand2.countDocuments();
    res.header("Content-Type", "application/json");
    res.json({ stands2, count });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



module.exports = {

  addStand2,
  getStands2,

};
