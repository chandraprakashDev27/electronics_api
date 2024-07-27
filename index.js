const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const formData = multer()
const cors = require('cors');

const app = express();

const {manageItems} = require("./app/items/items.js");
const {manageUnit}  = require("./app/items/unit.js");

app.use(bodyParser.json());
app.use(cors());
// Routes
app.get("/", (req,res)=>res.send("API WORKING......"));

app.post("/manageItems",formData.single('item_img'),manageItems)
app.post("/manageUnit",formData.single('item_img'),manageUnit)


// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
