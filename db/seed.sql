

DELETE FROM bob;
DELETE FROM weapons;
DELETE FROM beverages;
DELETE FROM tips;


INSERT INTO weapons (name, description) VALUES
  (
    'Biggun',
    'Only takes one big bullet but that is enough'
  ),
  (
    'AK-47',
    'Loud but fast'
  ),
  (
    'Crossbow',
    'silent and deadly'
  ),
  (
    'Fruit peeler',
    'Because you hate the taste of apple skins'
  ),
  (
    'Kitchen Knife',
    'It was the only thing you could grab'
  );

  INSERT INTO beverages (name, description) VALUES
  (
    'Vitamin Water',
    'Chocked full of vitamins'
  ),
  (
    'Dasani',
    'Water is always good right?'
  ),
  (
    'CapriSun',
    'Sporty and flavorful'
  ),
  (
    'Coke',
    'Sugary drink to keep you going but crash later'
  ),
  (
    'Milk',
    'Spoils quickly but filling'
  );

  INSERT INTO tips (name, description) VALUES
  (
    'Always wear your seatbelt',
    'Seatbelts! Sure, you might get trapped if your car overturns, but its better than flying through the windsheild'
  ),
  (
    'Water,water water',
    'Do not forget water, you can only survive 3 days without it'
  ),
  (
    'River water',
    'That stream water might look tasty but just because its flowing does not mean its clean, always filter'
  ),
  (
    'Fire',
    'It is easier to make a fire with dry sticks than wet ones'
  ),
  (
    'Romance',
    'Never french kiss a zombie, ever!'
  );

INSERT INTO bob (creator, weapons_id, beverages_id, tips_id) VALUES
( 'ZombieKiller',
  2,
  5,
  4
),
( 'PrepperOne',
  1,
  3,
  3
),
( 'RodeoClown',
  1,
  4,
  2
),
( 'Joey',
  1,
  1,
  3
);





