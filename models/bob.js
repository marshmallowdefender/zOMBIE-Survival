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

delete(id) {
return db.none(`
DELETE FROM bob
WHERE id = $1
`,id)
},

save(bobData) {
    return db.one(`
    INSERT INTO bob
    (creator, weapons_id, beverages_id, tips_id)
    VALUES
    ($1, $2, $3, $4)
    RETURNING *
    `, [bobData.creator, bobData.weapons_id,bobData.beverages_id, bobData.tips_id]);
  },

};

