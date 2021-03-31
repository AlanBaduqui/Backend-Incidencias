const express = require("express");
const cors = require("cors");
const app = express();

//Setings
app.set('port', process.env.PORT || 4000);

//Middleware
app.use(cors());
app.use(express.json());

//Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/incidencias', require('./routes/incidencias'));


module.exports = app;