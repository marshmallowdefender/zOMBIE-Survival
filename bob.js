
//test to SQL queries

SELECT * FROM bob
JOIN weapons
ON weapons_id = weapons.id
JOIN beverages
ON beverages_id = beverages.id
JOIN tips
ON tips_id = tips.id;

SELECT name.id FROM bob
JOIN weapons
ON weapons_id = weapons.id
JOIN beverages
ON beverages_id = beverages.id
JOIN tips
ON tips_id = tips.id;