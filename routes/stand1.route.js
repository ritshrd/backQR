const express = require("express");
const Stand1 = require("../models/stand1.model.js");
const router = express.Router();
const { addStand1, getStands1 } = require('../controllers/stand1.controller.js');



router.post("/", addStand1);

// Ruta para manejar solicitudes GET en /api/getStands1
router.get('/api/getStands1', async (req, res) => {
    try {
      const stands1 = await Stand1.find({});
      const count = await Stand1.countDocuments();
      res.header("Content-Type", "application/json");
      res.json({ stands1, count });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });



module.exports = router;