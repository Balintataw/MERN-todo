const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config();

const api = require('./routes/api');

const router = express.Router();
const app = express();

const port = process.env.PORT || 3001;

mongoose.connect(process.env.DB, { useNewUrlParser: true })
    .then(() => console.log(`Db connected successfully`))
    .catch(err => console.log("Db connection error:", err))

mongoose.Promise = global.Promise;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(bodyParser.json());

app.use('/api', api);

app.use((err, req, res, next) => {
    console.log(err);
    next();
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
});