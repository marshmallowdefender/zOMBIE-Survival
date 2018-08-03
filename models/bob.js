// execute pgp with our db config, so a connection is made.
const {db} = require('../config/connection');


//Credited soda-lab homework
module.exports = {
//findall
findAll() {
return db.many(`
SELECT 
weapons.name AS weapon_item,
beverages.name AS Dranks,
tips.description AS Facts
FROM bob
JOIN weapons ON weapons.id = weapons_id
JOIN beverages ON beverages_id = beverages.id
JOIN tips ON tips_id = tips.id
`);
},

findById(id) {
return db.one(`
SELECT 
weapons.name AS weapon_item,
beverages.name AS Dranks,
tips.description AS Facts
FROM bob
JOIN weapons ON weapons.id = weapons_id
JOIN beverages ON beverages_id = beverages.id
JOIN tips ON tips_id = tips.id
WHERE bob.id = $1;
`, id);
},
};

