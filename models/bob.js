// execute pgp with our db config, so a connection is made.
const {db} = require('../config/connection');


//Credited soda-lab homework
module.exports = {
//findall
findAll() {
return db.many(`
SELECT 
bob.id, 
bob.creator,
weapons.name, 
beverages.name AS drink, 
tips.description 
FROM bob
JOIN weapons ON weapons_id = weapons.id
JOIN beverages ON beverages_id = beverages.id
JOIN tips ON tips_id = tips.id;
`);
},

findById(id) {
return db.one(`
SELECT 
bob.id,
bob.creator,
weapons.name,
beverages.name As drink,
tips.description
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

create(bobData) {
    return db.one(`
    INSERT INTO bob
    (creator, weapons_id, beverages_id, tips_id)
    VALUES
    ('Steve', 3,4,2)
    RETURNING *
    `, [bobData.creator, bobData.weapons_id,bobData.beverages_id,bobData.tips_id]);
  },



};



