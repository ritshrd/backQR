const express = require("express");
const Stand7 = require("../models/stand7.model.js");
const router = express.Router();
const { addStand7, getStands7 } = require('../controllers/stand7.controller.js');



router.post("/", addStand7);

// Ruta para manejar solicitudes GET en /api/getStands7
router.get('/api/getStands7', async (req, res) => {
    try {
      const stands7 = await Stand7.find({});
      const count = await Stand7.countDocuments();
      res.header("Content-Type", "application/json");
      res.json({ stands7, count });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });



module.exports = router;