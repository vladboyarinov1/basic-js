const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
// let test = 'com@usual.com' ;

function getEmailDomain(email) {
  email = email.substr(email.indexOf("@") + 1);
  email = email.substr(email.indexOf("@") + 1);
  // console.log(email)
  return email;
}

// getEmailDomain(test)


module.exports = {
  getEmailDomain
};
