const express = require('express');
const logIn = require('./user');
const logOut = require('./user');
const registerUser = require('./user');
const router = express.Router();

/* GET api listing. */
router.get('/', (req, res) => {
  res.send({code:200, message:'OK'});
});

router.get('/posts', (req, res) => {
  res.send({code:200, message:'OK'});
});

router.get('/posts/:postId', (req, res) => {
  res.send({code:200, message:'OK'});
});

router.post('/posts', (req, res) => {
  res.send({code:201, message:'Created'});
});

router.delete('/posts/:postId', (req, res) => {
  res.send({code:200, message:'OK'});
});

router.post('/user', registerUser);

router.post('/auth', logIn);

router.get('/auth', logOut);

module.exports = router;
