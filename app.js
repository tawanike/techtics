const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');

const DB = require('./server/utils/constants');
const config = require('./server/utils/config');

mongoose.connect('mongodb://' + DB.user + ':' + DB.password + '@ds054619.mlab.com:54619/' + DB.database);
const app = express();
app.set('secret', config.secret);

const api = require('./server/routes/api');
const admin = require('./server/routes/admin');

app.use((req, res, next) =>{
  console.log('Check if user is logged in.');
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'dist')));

app.use(morgan('dev'));

app.use('/api/v1/', api);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`API running on localhost:${port}`));
