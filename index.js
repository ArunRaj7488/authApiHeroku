const express = require('express');
const app = express();
const cors = require("cors");

app.use(cors());

require('./startup/db');
require('./startup/routers')(app);




PORT = 5000 || process.env.PORT
app.listen(PORT ,()=> console.log(`Server started at ${PORT}`));