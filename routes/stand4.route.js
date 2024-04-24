const express = require("express");
const Stand4 = require("../models/stand4.model.js");
const router = express.Router();
const { addStand4, getStands4 } = require('../controllers/stand4.controller.js');



router.post("/", addStand4);

// Ruta para manejar solicitudes GET en /api/getStands4
router.get('/api/getStands4', async (req, res) => {
    try {
      const stands4 = await Stand4.find({});
      const count = await Stand4.countDocuments();
      res.header("Content-Type", "application/json");
      res.json({ stands4, count });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });



module.exports = router;