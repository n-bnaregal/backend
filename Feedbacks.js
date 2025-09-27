const express = require('express');
const router = express.Router();
const Cart = require('../models/Cart');
const Feedback = require('../models/Feedback');



router.post('/', async (req, res) => {
  try {
    const { productname,description,productbought,review,ratings } = req.body;

    const newItem = new Feedback({
      productname,
      description,
      productbought,
      review,
      ratings
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
    const items = await Feedback.find();  // Fetch all items in the cart
    res.json(items);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching items' });
  }
});


router.get('/:id', async (req, res) => {
  try {
    const item = await Feedback.findById(req.params.id);  // Find by ID
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
    const { productname,description,productbought,review,ratings  } = req.body;

    const updatedItem = await Feedback.findByIdAndUpdate(
      req.params.id,
      {  productname,description,productbought,review,ratings },
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
    const {  productname,description,productbought,review,ratings } = req.body;

    const updatedItem = await Feedback.findByIdAndUpdate(
      req.params.id,
      {  productname,description,productbought,review,ratings},
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
    const item = await Feedback.findByIdAndDelete(req.params.id);  // Delete item by ID
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