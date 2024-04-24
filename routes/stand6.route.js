const express = require("express");
const Stand6 = require("../models/stand6.model.js");
const router = express.Router();
const { addStand6, getStands6 } = require('../controllers/stand6.controller.js');



router.post("/", addStand6);

// Ruta para manejar solicitudes GET en /api/getStands6
router.get('/api/getStands6', async (req, res) => {
    try {
      const stands6 = await Stand6.find({});
      const count = await Stand6.countDocuments();
      res.header("Content-Type", "application/json");
      res.json({ stands6, count });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });



module.exports = router;