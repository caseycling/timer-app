const mongoose = require('mongoose');

const TimerSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  time: {
    type: Number,
    required: true,
    default: 0,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const TimerModel = mongoose.model('times', TimerSchema);

module.exports = TimerModel;
