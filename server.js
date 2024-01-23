// Requires
require('dotenv').config();
require('./config/database');
const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");
const logger = require("morgan");
const port = process.env.PORT || 3001;
const app = express();
const ensureLoggedIn = require('./config/ensureLoggedIn');
const Item = require('./models/item');

// Middleware
app.use(logger("dev"));
app.use(express.json());
app.use(express.static(path.join(__dirname, "build")));
app.use(require('./config/checkToken'));

// Create route for adding data
app.post('/todo', async (req, res) => {
  try {
    const createdItem = await Item.create(req.body);
    console.log('Created Item:', createdItem);
    res.redirect('/todo');
  } catch (err) {
    console.error('Error creating item:', err);
    res.status(500).send('Internal Server Error');
  }
});

// API routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/items', ensureLoggedIn, require('./routes/api/items'));
app.use('/api/orders', ensureLoggedIn, require('./routes/api/orders'));

// React app route
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// Server
app.listen(port, function () {
  console.log(`Express app running on port ${port}`);
});
