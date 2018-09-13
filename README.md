# zOMBIE-Survival
This website is a collection of zombie survival tips,tricks and items. Build your own B.O.B.(Bug out Bag). Will you survive the Zombie Apocalypse?

What is a Bug-out-Bag you may ask?


Off-the-shelf Red Cross preparedness kit
A bug-out bag or BOB is a portable kit that normally contains the items one would require to survive for 72 hours when evacuating from a disaster, although some kits are designed to last longer periods. Other names for such a bag are a BOB, 72-hour kit, a grab bag, battle box, personal emergency relocation kit (PERK), go bag, GOOD bag (get out of Dodge) INCH bag (I'm never coming home) or quick run bag (QRB).

* Source: https://en.wikipedia.org/wiki/Bug-out_bag

![zombiebugoutbag7](https://user-images.githubusercontent.com/39752800/43781219-6be18c40-9a2a-11e8-82f9-decd5df5b04f.png)



## Motivation

I was motivated to make this app because I really love Zombies and the thought of being able to create your own personal B.O.B and save it was amazing to me. A lot of people don't know about B.O.B's so I think this will be very educational.


## App Link
* https://sleepy-hollows-79328.herokuapp.com/bob/

## Video Link
* https://www.youtube.com/watch?v=dT1ag1zOBfM&t=2s


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

<img width="1433" alt="zombiesurvival" src="https://user-images.githubusercontent.com/39752800/43779459-724fdc84-9a26-11e8-9263-dde961668537.png">

![homepage](https://user-images.githubusercontent.com/39752800/43779356-37c8ccec-9a26-11e8-957a-362f25e9fd0e.png)

![erd](https://user-images.githubusercontent.com/39752800/43779383-461a6224-9a26-11e8-8794-a6f64296bae8.png)


More can be found in the Wireframes folder.


## User Stories
1. As a user I want to be able to view BOBs already created
1. As a user I want to create my own BOB and add it to the database
1. As a user I want to be able to create my own collection of favorite BOBs
1. As a user I want to be able to pick different items from the database to create my own BOB
1. On the home screen, I want to see an example of a survival tip
1. When created my own BOB, I can choose from items in a database to add to my own BOB and name it.



## Built with

* Visual Studio Code
* EJS
* Express
* PG-Promise
* Morgan
* Heroku





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

* https://expressjs.com/
* https://git.generalassemb.ly/wdi-nyc-lambda/soda-lab
* https://www.outsideonline.com/2314116/ultimate-diy-bug-out-bag
* https://io9.gizmodo.com/5148637/10-tips-for-surviving-the-zombie-apocalypse
* http://www.bugoutbagbuilder.com/my-bag



## License

GA © Ashley Thompson
