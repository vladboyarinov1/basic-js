const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
// let test = ['Matt', 'Ann', 'Dmitry', 'Max'];

function createDreamTeam(members) {
  if(!Array.isArray(members)){
    return false;
  } 
  if(members.length == 0) {
    return false;
  }
  return members
  .filter(el => typeof el == 'string' && el.length > 0)
  .map(el => el.trim().toUpperCase()).sort()
  .map(el => el[0]).join('');
}

// console.log(createDreamTeam(test));

module.exports = {
  createDreamTeam
};


