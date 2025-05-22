const express = require('express');
const router = express.Router();
const Item = require('../models/Item');

// GET all items
router.get('/', async (req, res) => {
  const items = await Item.find();
  res.json(items);
});

// POST add item
router.post('/', async (req, res) => {
  const { name, stock } = req.body;
  const newItem = new Item({ name, stock });
  await newItem.save();
  res.status(201).json(newItem);
});

// PUT update item
router.put('/:id', async (req, res) => {
  const { name, stock } = req.body;
  const updatedItem = await Item.findByIdAndUpdate(req.params.id, { name, stock }, { new: true });
  res.json(updatedItem);
});

// DELETE item
router.delete('/:id', async (req, res) => {
  await Item.findByIdAndDelete(req.params.id);
  res.json({ message: 'Item deleted' });
});

module.exports = router;
