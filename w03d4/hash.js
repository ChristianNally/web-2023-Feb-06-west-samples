const bcrypt = require('bcrypt');

const plaintextPassword = 'abcd';

// bcrypt.genSalt(10, function(err, salt) {
//   console.log('salt', salt);
//   bcrypt.hash(plaintextPassword, salt, function(err, hash) {
//     console.log('hash:', hash);
//   });
// });

bcrypt.genSalt(10)
  .then((salt) => {
    console.log('salt', salt);
    return bcrypt.hash(plaintextPassword, salt);
  })
  .then((hash) => {
    console.log('hash', hash);
  });

const hash = '$2b$10$40GY0YJ.zVz.NWQSSivPV.Ml4Ezop9y80fVZQrAlR50Tg9hyPbvIm';


bcrypt.compare('abcd', hash)
  .then((result) => {
    console.log('do the passwords match?', result);
  });

