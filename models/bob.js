// execute pgp with our db config, so a connection is made.
const { db } = require('../config/connection');


// Credited soda-lab homework
module.exports = {
// findall
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
JOIN tips ON tips_id = tips.id
`);
  },
  // find one
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
  // delete
  delete(id) {
    return db.none(`
DELETE FROM bob
WHERE id = $1
`, id);
  },
  // create
  create(bob) {
    return db.one(`
INSERT INTO bob
(creator, weapons_id, beverages_id, tips_id)
VALUES
($/creator/, $/weapons_id/,$/beverages_id/ ,$/tips_id/)
RETURNING *
`, bob);
  },
  // update
  update(bob) {
    return db.one(`
      UPDATE bob
      SET 
      creator = $/creator/,
      weapons_id = $/weapons_id/,
      beverages_id = $/beverages_id/,
      tips_id =$/tips_id/
      WHERE id = $/id/
      RETURNING *
      `, bob);
  },
};
