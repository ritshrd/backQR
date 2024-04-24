const express = require("express");
const Stand3 = require("../models/stand3.model.js");
const router = express.Router();
const { addStand3, getStands3 } = require('../controllers/stand3.controller.js');



router.post("/", addStand3);

// Ruta para manejar solicitudes GET en /api/getStands3
router.get('/api/getStands3', async (req, res) => {
    try {
      const stands3 = await Stand3.find({});
      const count = await Stand3.countDocuments();
      res.header("Content-Type", "application/json");
      res.json({ stands3, count });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });



module.exports = router;