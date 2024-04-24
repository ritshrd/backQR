const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const Stand1 = require("./models/stand1.model.js");
const Stand2 = require("./models/stand2.model.js");
const Stand3 = require("./models/stand3.model.js");
const Stand4 = require("./models/stand4.model.js");
const Stand5 = require("./models/stand5.model.js");
const Stand6 = require("./models/stand6.model.js");
const Stand7 = require("./models/stand7.model.js");
const Stand8 = require("./models/stand8.model.js");


const stand1Route = require("./routes/stand1.route.js");
const stand2Route = require("./routes/stand2.route.js");
const stand3Route = require("./routes/stand3.route.js");
const stand4Route = require("./routes/stand4.route.js");
const stand5Route = require("./routes/stand5.route.js");
const stand6Route = require("./routes/stand6.route.js");
const stand7Route = require("./routes/stand7.route.js");
const stand8Route = require("./routes/stand8.route.js");

const productRoute = require("./routes/product.route.js");
const cors = require('cors');



const app = express();

app.use(cors());

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));



// routes
app.use("/api/products", productRoute);
app.use("/api/stand1", stand1Route);
app.use("/api/stand2", stand2Route);
app.use("/api/stand3", stand3Route);
app.use("/api/stand4", stand4Route);
app.use("/api/stand5", stand5Route);
app.use("/api/stand6", stand6Route);
app.use("/api/stand7", stand7Route);
app.use("/api/stand8", stand8Route);




app.get("/", (req, res) => {
  res.send("Hello from Node API Server Updated");
});


mongoose
  .connect(
    "mongodb+srv://richard7:sAprlr0SbosjyYCd@cluster0.akgyqhz.mongodb.net/Stands"
  )
  .then(() => {
    console.log("Connected to database!");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection failed!");
  });
