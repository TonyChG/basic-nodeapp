/*
 * Author      : github.com/TonyChG
 * Date        : Tue 08 May 2018 06:59:27 PM CEST
 * Description :
**/

const express = require('express');
const cors = require('cors');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('tiny'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/static/index.html'));
});

app.listen(port, () => {
    console.log(`Server on: http://localhost:${port}`);
});

module.exports = app;
