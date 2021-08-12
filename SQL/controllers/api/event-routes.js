const router = require('express').Router();
const { User, Event } = require('../../models');
const { auth } = require('../../utils/auth');

//find one event
router.get('/', (req, res) => {
  Event.findOne({
    where: {
      id: req.params.id
    },
    attributes: ['id']
  })
  .then(dbEventData => {
    if(!dbEventData) {
      res.status(400).json({ message: 'No event found with this id' });
      return;
    }
    res.json(dbEventData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
})

module.exports = router;