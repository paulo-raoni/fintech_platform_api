const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const session = require('express-session');
const passport = require('passport');

const financeRoutes = require('./routes/financeRoutes');
const auth = require('./routes/auth');
const db = require('./config/db');
const { configure } = require('./config/passportconfig');

const serverDevPort = 3000;
const clientDevPort = 7165;

const app = express();

mongoose.connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

app.use(session({ 
    secret: 'asdfasdfa',
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
configure(passport);

// New config on Express v4.16.0 and higher 
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));



// define port for API to run on
const port = process.env.PORT || serverDevPort;

// set CORS headers on response from this API using the `cors` NPM package
app.use(cors({ origin: process.env.CLIENT_ORIGIN || `http://localhost:${clientDevPort}` }));

app.use(financeRoutes);
app.use(auth);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

module.exports = app;