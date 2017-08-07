'use strict';

const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');

const  Post = require('./models');
const { DATABASE_URL, PORT } = require('./config');
const app = express();

app.use(bodyParser.json());
mongoose.Promise = global.Promise;

app.get('/', (req, res) => {
  console.log('inside get');
  //res.json({ message: 'Hello' });
  // Post.find({}), (err, post) =>{
  //   console.log('post, find', post);
  // };

  Post  
    .find()
    .exec()
    .then(posts => {
        console.log('Hiya');
        console.log(posts);
        res.status(200).json(posts);
    })
    .catch(err => {
        console.log("It didn't work");
        res.status(500).json({message: 'Internal error from GET'});
    })
// res.send('Hello');
});

app.post('/post', (req, res) => {
  console.log('inside post');
  //Post.findOneAndUpdate({data: "Yellpw"})
   Post
    .create({
        data: req.body.data
    })
    .then(results => {
      console.log('hi');
      console.log('results', results);
      res.status(201).json(results.apiRepr());
    })
    .catch(err => {
      console.log("Post isn't working");
      res.status(500).json({ message: 'Internal error from Post' });
    });
});

let server;

function runServer(databaseUrl=DATABASE_URL, port=PORT) {

  return new Promise((resolve, reject) => {
    mongoose.connect(databaseUrl, err => {
      if (err) {
        return reject(err);
      }
      server = app.listen(port, () => {
        console.log(`Your app is listening on port ${port}`);
        resolve();
      })
      .on('error', err => {
        mongoose.disconnect();
        reject(err);
      });
    });
  });
}
function closeServer() {
  return mongoose.disconnect().then(() => {
    return new Promise((resolve, reject) => {
      console.log('Closing server');
      server.close(err => {
        if (err) {
          return reject(err);
        }
        resolve();
      });
    });
  });
}

if (require.main === module) {
  runServer().catch(err => console.error(err));
}

module.exports = { runServer, closeServer, app };
