'use strict';

const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');

const {DATABASE_URL, PORT} = require('./config');
const app = express();

app.use(bodyParser.json());
mongoose.Promise = global.Promise;

app.get('/api/posts', (req, res) => {
    console.log('hi!');
})

let server;

function runServer(databaseUrl, port = 8080) {
  return new Promise((resolve, reject) => {
    server = app.listen(port, () => {
        console.log(`Your app is listening on port ${port}`);
        resolve();
      })
      .on('error', err => {
        reject(err);
      });
  });
}

function closeServer() {
  return new Promise((resolve, reject) => {
    console.log('Closing server');
    server.close(err => {
      if (err) {
        return reject(err);
      }
      resolve();
    });
  });
}

if (require.main === module) {
  runServer().catch(err => console.error(err));
};

module.exports = {runServer, closeServer, app};