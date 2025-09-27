const express = require('express');
const router = express.Router();
const Cart = require('../models/Cart');
const Login = require('../models/Login');


router.post('/', async (req, res) => {
  try {
    const { username, mobilenumber, password,email, location } = req.body;

    const newItem = new Login({
      username,
      mobilenumber,
      password,
      email,
      location
    });

    const savedItem = await newItem.save();
    res.status(201).json(savedItem);  // Return the newly created item
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Error adding item to cart' });
  }
});


router.get('/', async (req, res) => {
  try {
    const items = await Login.find();  // Fetch all items in the cart
    res.json(items);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching items' });
  }
});


router.get('/:id', async (req, res) => {
  try {
    const item = await Login.findById(req.params.id);  // Find by ID
    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.json(item);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching item' });
  }
});
router.put('/:id', async (req, res) => {
  try {
    const { username, mobilenumber, password,email, location} = req.body;

    const updatedItem = await Login.findByIdAndUpdate(
      req.params.id,
      {username, mobilenumber, password,email, location },
      { new: true }  // Return the updated item
    );

    if (!updatedItem) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.json(updatedItem);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Error updating item' });
  }
});


router.patch('/:id', async (req, res) => {
  try {
    const {username, mobilenumber, password,email, location} = req.body;

    const updatedItem = await Login.findByIdAndUpdate(
      req.params.id,
      { username, mobilenumber, password,email, location },
      { new: true }  // Return the updated item
    );

    if (!updatedItem) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.json(updatedItem);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Error updating item' });
  }
});


router.delete('/:id', async (req, res) => {
  try {
    const item = await Login.findByIdAndDelete(req.params.id);  // Delete item by ID
    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.json({ message: 'Item deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error deleting item' });
  }
});

module.exports = router;