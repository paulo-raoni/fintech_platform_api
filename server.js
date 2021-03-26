const express = require('express');
const app = express();
const db = require('./config/db');
const mongoose = require('mongoose');
const cors = require('cors');
const financaRoutes = require('./routes/financaRoutes.js');
const serverDevPort = 3000;
const clientDevPort = 7165;

// New config on Express v4.16.0 and higher 
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

mongoose.connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});


// define port for API to run on
const port = process.env.PORT || serverDevPort;

// set CORS headers on response from this API using the `cors` NPM package
app.use(cors({ origin: process.env.CLIENT_ORIGIN || `http://localhost:${clientDevPort}` }));

app.use(financaRoutes);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

module.exports = app;