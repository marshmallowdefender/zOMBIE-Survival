# zOMBIE-Survival
This website is a collection of zombie survival tips,tricks and items. Build your own B.O.B.(Bug out Bag). Will you survive the Zombie Apocalypse?


## Motivation

I was motivated to make this app because I really love Zombies and the thought of being able to create your own personal B.O.B and save it was amazing to me. A lot of people don't know about B.O.B's so I think this will be very educational.


## App Link




## Code Example
```javascript

  // find one (model)
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

 // Get one bob by id (controller)
  getOne(req, res, next) {
    db.findById(req.params.id)
      .then((bob) => {
        res.locals.bob = bob;
        next();
      })
      .catch(err => next(err));
  },

```



## Gameshots & Wireframes

![Wireframe](/wireframes/Bobs.png)

![Wireframe](/wireFrames/ERD.png)

![Wireframe](/wireFrames/Homepage.png)

![Wireframe](/wireFrames/ZombieSurvival.png)

More can be found in the Wireframes folder.


## Built with

[GitHub] (https://code.visualstudio.com/)
[GitHub] EJS
[GitHub] Express
[GitHub] Morgan
[GitHub] Heroku




## How to Use:
To test it out yourself, feel free to fork and clone my repo. If you want to play the actual game, I provided the link above to the game!

## Unsolved Problems:

1. Getting the Update/Edit function to actually update/edit instead of creating a new BOB altogether. 
1. In the create form, allowing users to input text instead of numbers/


### Things to be added later:
1. Implementing user login/register.
1. Design website using Bulma.
1. Make it so that users can only delete the BOBs they created.
1. Make it so that users can create a collection of BOBs they like.
1. Allow users to add multiples of certain items.
1. Allowing users to add their own things to a BOB.


## Credits

* 


## License

GA © Ashley Thompson
