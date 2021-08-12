const router = require('express').Router();
const sequelize = require('../config/connection');
const { Op } = require('sequelize');


// home page
router.get('/', (req, res) => {
  let data = {};
  res.render('homepage', { 
    data,
    loggedIn: req.session.loggedIn 
  })
})

//about page
router.get('/about', (req, res) => {

})

//signup page
router.get('/signup', async (req, res) => {
  
})

module.exports = router;