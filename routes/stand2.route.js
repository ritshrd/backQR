const express = require("express");
const Stand2 = require("../models/stand2.model.js");
const router = express.Router();
const { addStand2, getStands2 } = require('../controllers/stand2.controller.js');



router.post("/", addStand2);

// Ruta para manejar solicitudes GET en /api/getStands2
router.get('/api/getStands2', async (req, res) => {
    try {
      const stands2 = await Stand2.find({});
      const count = await Stand2.countDocuments();
      res.header("Content-Type", "application/json");
      res.json({ stands2, count });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });



module.exports = router;