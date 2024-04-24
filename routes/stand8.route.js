const express = require("express");
const Stand8 = require("../models/stand8.model.js");
const router = express.Router();
const { addStand8, getStands8 } = require('../controllers/stand8.controller.js');



router.post("/", addStand8);

// Ruta para manejar solicitudes GET en /api/getStands8
router.get('/api/getStands8', async (req, res) => {
    try {
      const stands8 = await Stand8.find({});
      const count = await Stand8.countDocuments();
      res.header("Content-Type", "application/json");
      res.json({ stands8, count });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });



module.exports = router;