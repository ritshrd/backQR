const express = require("express");
const Stand9 = require("../models/stand9.model.js");
const router = express.Router();
const { addStand9, getStands9 } = require('../controllers/stand9.controller.js');



router.post("/", addStand9);

// Ruta para manejar solicitudes GET en /api/getStands9
router.get('/api/', getStands9, async (req, res) => {
    try {
      const stands9 = await Stand9.find({});
      const count = await Stand9.countDocuments();
      res.header("Content-Type", "application/json");
      res.json({ stands9, count });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });



module.exports = router;