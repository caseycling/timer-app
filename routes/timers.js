const express = require('express');
const router = express.Router();

const TimerModel = require('../models/Timer');

router.get('/', async (req, res) => {
  try {
    const timers = await TimerModel.find({});
    console.log('Succesful get req', timers);
    res.send(timers);
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
