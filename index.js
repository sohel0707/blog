const express = require("express");
require('dotenv').config()
const app = express();
const PORT = 6969;

app.use(express.json());
app.use('/', require('./routes'))

app.listen(PORT, () => {
  console.log("Server running");
  
});
