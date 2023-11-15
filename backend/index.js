const express = require("express");
const dotenv = require("dotenv").config();

const app = express();

const PORT  = process.env.PORT||4000;
app.listen(PORT, (req, res)=>{
    console.log(`Server is running at PROT ${PORT}`);
})