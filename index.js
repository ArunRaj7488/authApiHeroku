const express = require('express');
const app = express();
const cors = require("cors");

require('./startup/db');
require('./startup/routers')(app);


app.use(cors());


PORT = 5000 || process.env.PORT
app.listen(PORT ,()=> console.log(`Server started at ${PORT}`));