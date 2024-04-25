const express = require("express");
const Stand10 = require("../models/stand10.model.js");
const router = express.Router();
const { addStand10, getStands10 } = require('../controllers/stand10.controller.js');



router.post("/", addStand10);

// Ruta para manejar solicitudes GET en /api/getStands10
router.get('/api/', getStands10, async (req, res) => {
    try {
      const stands10 = await Stand10.find({});
      const count = await Stand10.countDocuments();
      res.header("Content-Type", "application/json");
      res.json({ stands10, count });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });



module.exports = router;