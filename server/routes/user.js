const jwt    = require('jsonwebtoken');
const config = require('../utils/config');
const User = require('../schemas/user');

module.exports = logIn = () => {
  console.log('Log in user!!!');
}

module.exports = logOut = () => {
  console.log('Log out user!!!');
}

module.exports = registerUser = () => {
  const user = new User({
    fname: 'Tawanda',
    lname: 'Makunike',
    admin: true,
    password: 'mypassword',
    email: 'tawanda@makunike.com'
  });

  user.save(function(err) {
    if (err) throw err;
    console.log('User saved successfully');
    return {code:201, message:'Created'};
  });
}
