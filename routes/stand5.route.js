const express = require("express");
const Stand5 = require("../models/stand5.model.js");
const router = express.Router();
const { addStand5, getStands5 } = require('../controllers/stand5.controller.js');



router.post("/", addStand5);

// Ruta para manejar solicitudes GET en /api/getStands5
router.get('/api/getStands5', async (req, res) => {
    try {
      const stands5 = await Stand5.find({});
      const count = await Stand5.countDocuments();
      res.header("Content-Type", "application/json");
      res.json({ stands5, count });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });



module.exports = router;