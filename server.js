const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const PORT = process.env.PORT || 3001;
require('dotenv/config');

//Middleware
app.use(cors());

//Import routes
const timerRoutes = require('./routes/timers');

app.use('/', timerRoutes);

// ROUTES
app.get('/', (req, res) => {
  res.send(res);
});

//Connect to db
mongoose
  .connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('succesful connection to db');
  })
  .catch((error) => console.log(error));

//Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
