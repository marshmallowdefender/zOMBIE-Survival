// execute pgp with our db config, so a connection is made.
const db = require('../config/connection');


//Credited soda-lab homework
module.exports = {
//findall
findAll() {
return db.many(`
   SELECT * FROM bob
`)}
};

