'use strict';

const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');

const  Post = require('./models');
const { DATABASE_URL, PORT } = require('./config');
const app = express();

app.use(bodyParser.json());
mongoose.Promise = global.Promise;

// GET all
app.get('/', (req, res) => {
  Post  
    .find()
    .exec()
    .then(posts => {
      res.status(200).json(posts);
    })
    .catch(err => {
      console.log('Get failed!');
      res.status(500).json({message: 'Internal error from GET'});
    });
});

// GET by ID
app.get('/posts/:id', (req, res) => {
  Post
    // this is a convenience method Mongoose provides for searching
    // by the object _id property
    .findById(req.params.id)
    .then(post =>res.json(post.apiRepr()))
    .catch(err => {
      console.error(err);
      res.status(500).json({message: 'Internal server error'});
    });
});

// Post new post
app.post('/post', (req, res) => {
  Post
    .create({
      text: req.body.text
    })
    .then(posts => {
      console.log('Post: ', posts);
      res.status(201).json(posts.apiRepr());
    })
    .catch(err => {
      console.log('Post failed!');
      res.status(500).json({ message: 'Internal error from POST' });
    });
});

// Edit post by ID
app.put('/post/:id', (req, res) => {
  const requiredFields = ['text'];
  for (let i=0; i<requiredFields.length; i++) {
    const post = requiredFields[i];
    if (!(post in req.body)) {
      const message = `Missing \`${post}\` in request body`;
      console.error(message);
      return res.status(400).send(message);
    }
  }
  if (req.params.id !== req.body.id) {
    const message = `Request path id (${req.params.id}) and request body id (${req.body.id}) must match`;
    console.error(message);
    return res.status(400).send(message);
  }
  console.log(`Updating post list \`${req.params.id}\``);

  // 1st attempt, 204 No Content
  // Post.update({
  //   id: req.params.id,
  //   text: req.body.text,
  // })

  // 2nd, 204
  // Post.update({id: req.params.id}, {text: "force change"})

  // Post.update({id: req.params.id}, {text: req.body.text})
  // Post.update({id: req.params.id}, {text: 'hard coded'});
  // .exec();

  // 3rd, Stack Overflow 204
  Post.update({id: req.params.id}, {$set: {text: req.body.text}});
  // Post.update({ id: req.params.id }, { $set: { text: 'changed' }});

  // hangs
// Post.update({ id: req.params.id }, { text: req.body.text }, function (err, raw) {
//   if (err) return (err);
//   console.log('The raw response from Mongo was ', raw);
// });


// thinful's i think, hangs
//   app.put('/post/:id', (req, res) => {
//     Post
//  .findById(req.params.post.id, function(err, comment) {
//    if (err)
//      res.send(err);
//  //setting the new author and text to whatever was changed. If 
// //nothing was changed we will not alter the field.
//    (req.body.text) ? comment.text = req.body.text : null;
//  //save comment
//    comment.save(function(err) {
//      if (err)
//        res.send(err);
//      res.json({ message: 'Updated' });
//    });
//  });
//   });


  // this one is updating the wrong id, grabs the 1st on listed
  Post.findOneAndUpdate({
    text: req.body.text
  })
  .then(activity => {
    res.json(activity);
  })

  // not working, hangs
  // Post.findOneAndUpdate({id: req.params.id,}, {$set:{text:'Bob'}}, function(err, doc){
  //   if(err){
  //     console.log('Something wrong when updating data!');
  //   }
  //   console.log('worked?');
  // });



  // .then(post => {
  //   console.log('what i edited: ', post);
  //   res.status(201).json(post.apiRepr());    
  // })
  // .catch(err => {
  //   console.log('Put failed!');
  //   res.status(500).json({ message: 'Internal error from PUT' });    
  // });
  // res.status(204).end();
});




// Delete post by ID
app.delete('/post/:id', (req, res) => {
  Post
    .findByIdAndRemove(req.params.id)
    .then(post => res.status(204).end())
    .catch(err => res.status(500).json({message: 'Internal server error'}));
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
