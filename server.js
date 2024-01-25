// Requires
require('dotenv').config()
require('./config/database');
const express = require("express");
const methodOverride = require("method-override");
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
app.use(methodOverride("_method"));
app.use(require('./config/checkToken'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/items', ensureLoggedIn, require('./routes/api/items'));
app.use('/api/orders', ensureLoggedIn, require('./routes/api/orders'));

// Routes


// Server
app.listen(port, function () {
  console.log(`Express app running on port ${port}`);
});

app.get('/todo/edit/:id', (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

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

app.put('/todo/edit/:id', async (req, res) => {
  const itemId = req.params.id;
  try {
    const updatedItem = await Item.findByIdAndUpdate(itemId, req.body, { new: true });
    res.json(updatedItem);
    // res.redirect('/todo');
  } catch (error) {
    console.error(error);
  }
});

app.delete('/todo/edit/:id', async (req, res) => {
  const itemId = req.params.id;
  try {
    await Item.findByIdAndDelete(itemId);
  } catch (error) {
    console.error(error);
  }
});

app.get('/todo/:id', async (req, res) => {
  const itemId = req.params.id;
  try {
    const foundItem = await Item.findById(itemId);
    if (foundItem) {
      res.json(foundItem);
    }
  } catch (error) {
    console.error(error);
  }
});

app.get('/todo', async (req, res) => {
  try {
    const allItems = await Item.find({});
    res.json(allItems);
  } catch (error) {
    console.error('Error fetching items:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});