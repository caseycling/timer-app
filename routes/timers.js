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

router.post('/:title', async (req, res) => {
  console.log(req.params);
  try {
    const newTimer = new TimerModel({ title: req.params.title });
    newTimer.save().then((res) => {
      res.send(res);
      console.log(res);
    });
    console.log(newTimer);
  } catch (err) {
    console.log(`Err: ${err}`);
  }
});

module.exports = router;
