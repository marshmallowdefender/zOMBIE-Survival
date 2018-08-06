
//test to SQL queries

SELECT * FROM bob
JOIN weapons
ON weapons_id = weapons.id
JOIN beverages
ON beverages_id = beverages.id
JOIN tips
ON tips_id = tips.id;

//Returns
id |   creator    | weapons_id | beverages_id | tips_id | id |  name  |                 description                  | id |   name   |        description         | id |    name     |                           description
----+--------------+------------+--------------+---------+----+--------+----------------------------------------------+----+----------+----------------------------+----+-------------+-----------------------------------------------------------------
  1 | ZombieKiller |          2 |            5 |       4 |  2 | AK-47  | Loud but fast                                |  5 | Milk     | Spoils quickly but filling |  4 | Fire        | It is easier to make a fire with dry sticks than wet ones
  2 | PrepperOne   |          1 |            3 |       3 |  1 | Biggun | Only takes one big bullet but that is enough |  3 | CapriSun | Sporty and flavorful       |  3 | River water | Just because its flowing does not mean its clean, always filter
(2 rows)



SELECT * FROM bob;

//returns
 id |   creator    | weapons_id | beverages_id | tips_id
----+--------------+------------+--------------+---------
  1 | ZombieKiller |          2 |            5 |       4
  2 | PrepperOne   |          1 |            3 |       3
(2 rows)




SELECT 
weapons.name AS weapon_item,
beverages.name AS Dranks,
tips.description AS Facts
FROM bob
JOIN weapons ON weapons.id = weapons_id
JOIN beverages ON beverages_id = beverages.id
JOIN tips ON tips_id = tips.id;

//Returns ALL
weapon_item |  dranks  |                              facts
-------------+----------+-----------------------------------------------------------------
 AK-47       | Milk     | It is easier to make a fire with dry sticks than wet ones
 Biggun      | CapriSun | Just because its flowing does not mean its clean, always filter
(2 rows)


SELECT weapons FROM bob
JOIN weapons
ON weapons_id = weapons.id
WHERE name = 'Biggun';

//Returns
weapons
-----------------------------------------------------------
 (1,Biggun,"Only takes one big bullet but that is enough")
(1 row)


SELECT bob.id, weapons.name , beverages.name, tips.description FROM bob
JOIN weapons
ON weapons_id = weapons.id
JOIN beverages
ON beverages_id = beverages.id
JOIN tips
ON tips_id = tips.id;
//Returns
//changed name to the corresponding table, couldn't get AS to work

id | weapon | beverage |                           description
----+--------+----------+-----------------------------------------------------------------
  1 | AK-47  | Milk     | It is easier to make a fire with dry sticks than wet ones
  2 | Biggun | CapriSun | Just because its flowing does not mean its clean, always filter



  SELECT 
  weapons.name AS weapon_item,
  beverages.name AS Dranks,
  tips.description AS Facts
  FROM bob
  JOIN weapons ON weapons.id = weapons_id
  JOIN beverages ON beverages_id = beverages.id
  JOIN tips ON tips_id = tips.id
  WHERE bob.id = 2;

//returns one
weapon_item |  dranks  |                              facts
-------------+----------+-----------------------------------------------------------------
 Biggun      | CapriSun | Just because its flowing does not mean its clean, always filter
(1 row)

save(bobData) {
  return db.one(`
  INSERT INTO bob
  (creator, weapons_id, beverages_id, tips_id)
  VALUES
  ($1, $2, $3, $4)
  RETURNING *
  `, [bobData.creator, bobData.weapons_id,bobData.beverages_id, bobData.tips_id]);
},




    INSERT INTO bob
    (creator,weapons_id, beverages_id, tips_id)
    VALUES
    ('TheDude', 3,4,1)
    RETURNING *;

    SELECT bob.id, bob.creator, weapons.name , beverages.name, tips.description FROM bob
    JOIN weapons
    ON weapons_id = weapons.id
    JOIN beverages
    ON beverages_id = beverages.id
    JOIN tips
    ON tips_id = tips.id;


    SELECT 
    bob.id,
    bob.creator,
    weapons.name,
    beverages.name,
    tips.description
    FROM bob
    JOIN weapons ON weapons.id = weapons_id
    JOIN beverages ON beverages_id = beverages.id
    JOIN tips ON tips_id = tips.id
    WHERE bob.id = 2;



    <%- include('./partials/bobDetail', {bob}) %>

    <!-- <textarea form="soda" name="description"><%=bob.creator %></textarea> 
    <textarea form="bob" name="description"><%=bob.weapons_id %></textarea>
    <textarea form="bob" name="description"><%=bob.beverages_id %></textarea>
    <textarea form="bob" name="description"><%=bob.tips_id %></textarea>

    <select name="type" form="bob" value="<%=bob.weapon_id%>" selected="<%=bob.name%>">
    <option value="1"> Cola </option>
    <option value="2"> Citrus </option>
    <option value="3"> Other </option>
    </select> -->


  // Make a blank bob
  makeBlankBob(req, res, next) {
    const bob = {
      creator: '',
      name: '',
      drink: '',
      description: '',
    };

    res.locals.bob = bob;
    next();
  },






<h1> All the sodas </h1>
<article class="soda-index">
<% sodas.forEach(soda => { %>
<%- include('../partials/singleSoda', {soda}) %>
<a href="/sodas/<%=soda.soda_id%>"> <button> Soda details </button> </a>
<% }) %>
</article>
<a href="/sodas/new"> Create a soda </a>

<article class ="bob-index">
<% bobs.forEach((bob) => { %>
  <%- include('./partials/bobDetail.ejs', {bob: bob}) %>
<a href="/bob/<%=bob.bob_id%>"> <button> Bob details </button> </a>
  <% }) %>



<%- include('./partials/boilerplate') %>
<h1>This is the Show All View</h1>
<% bobs.forEach((bob) => { %>
    <%- include('./partials/bobDetail.ejs', {bob: bob}) %>
    <% }) %>
<%- include('./partials/footer') %>

// Edit
bobRouter.get('/:id/edit', bobController.getOne, viewController.showEditForm);

bobRouter.get('/new', viewController.showBlankForm);


// Get One
bobRouter.get('/:id', bobController.getOne, viewController.showOne, viewController.show404);

// Delete
bobRouter.delete('/:id', bobController.destroy, viewController.handleDestroy);



// Update
bobRouter.put('/:id', bobController.update, viewController.handleUpdate)



// Create
bobRouter.post('/', bobController.create, viewController.handleCreate);
// Get all
bobRouter.get('/', bobController.index, viewController.showAll, viewController.show404);

 // Update a bob
  update(req, res, next) {
    const { id } = req.params;
    const bobBody = req.body;
    db.update(id, bobBody)
      .then((bob) => {
        res.locals.bob = bob;
        next();
      })
      .catch(err => next(err));
  },

   // Handle Update
  handleUpdate(req, res) {
    res.redirect('/bob');
  },