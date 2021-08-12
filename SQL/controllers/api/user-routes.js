const router = require('express').Router();
const { User, Event } = require('../../models');
const { auth } = require('../../utils/auth');

// get all users
router.get('/', (req, res) => {
  User.findAll({
    attributes: { exclude: ['password']}
  })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
})

// get single user
router.get('/:id', (req, res) => {
  User.findOne({
    attributes: {
      exclude: ['password']
    },
    where: {id: req.params.id},
    include: [
      {
        model: Event,
        attributes: ['id', 'name', 'description']
      }
    ]
  })
  .then(dbUserData => {
    if(!dbUserData) {
      res.status(400).json({ message: 'No user found with this id'});
      return;
    }
    res.json(dbUserData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
});

// create a new user
router.post('/', (req, res) => {
  User.create({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: req.body.password,
    avatar: req.body.avatar,
    admin: false
  })
  .then(dbUserData => {
    req.session.save(() => {
      req.session.user_id = dbUserData.id;
      req.session.user_name = `${dbUserData.first_name} ${dbUserData.last_name}`,
      req.session.loggedIn = true;
      req.session.isAdmin = dbUserData.admin;
    })
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// user login
router.post('/login', (req, res) => {
  User.findOne({
    where: {
      email: req.body.email
    }
  })
  .then(dbUserData => {
    if(!dbUserData) {
      res.status(400).json({ message: 'No user exists with this email address' })
      return;
    }
    const validPassword = dbUserData.checkPassword(req.body.password);
    if(!validPassword) {
      res.status(400).json({ message: 'Incorrect Password!' });
      return;
    }

    req.session.save(() => {
      //declare session variables
      req.session.user_id = dbUserData.id;
      req.session.user_name = `${dbUserData.first_name} ${dbUserData.last_name}`;
      req.session.loggedIn = true;
      req.session.isAdmin = dbUserData.admin;

      res.json({ user: dbUserData, message: 'You are now logged in!' });
    })
  })
});

// user logout
router.post('/logout', (req, res) => {
  if(req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    })
  } else {
    res.status(400).end();
  }
})

// update an existing user
router.put('/:id', auth, async (req, res) => {
  try {
      let body;
      let updatedUserData;
      if (req.body.currentPassword && req.body.currentPassword != '') {
          // find the user by id
          const user = await User.findByPk(req.params.id); 

          // check if the current password is valid
          const validPassword = user.checkPassword(req.body.currentPassword);
          if (!validPassword) {
              res.status(400).json({ message: "Current password is incorrect!"});
              return;
          }

          // set body with password field
          body = {
              first_name: req.body.first_name,
              last_name: req.body.last_name,
              email: req.body.email,
              password: req.body.newPassword,
              avatar: req.body.avatar
          };

          // perform update operation with password hashing
          updatedUserData = await User.update(body,{
              individualHooks: true,
              where: {
                  id: req.params.id
              }
          });
      } else {
          // set body without password field
          body = {
              first_name: req.body.first_name,
              last_name: req.body.last_name,
              email: req.body.email,
              avatar: req.body.avatar
          };

          // perform update operation without password hashing
          updatedUserData = await User.update(body,{
              individualHooks: false,
              where: {
                  id: req.params.id
              }
          });
      }

      if(!updatedUserData[0]) {
          res.status(404).json({ message: 'No user found with this id'})
      }
      res.json(updatedUserData);

  } catch (err) {
      console.log(err);
      res.status(500).json(err);
  }
});

// delete a user
router.delete('/:id', auth, async (req, res) => {
  try {
      const dbUserData = await User.destroy({
          where: {
              id: req.params.id
          }
      });
  
      if(!dbUserData) {
          res.status(404).json({ message: 'No user found with this id' });
          return;
      }

      // remove user session
      if(req.session.loggedIn){
          req.session.destroy(() => {
              res.status(204).end();
          })
      } else {
          res.status(404).end();
      }

  } catch (err) {
      console.log(err);
      res.status(500).json(err);
  }
});

module.exports = router;