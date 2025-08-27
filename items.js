// shopping-backend/items.js
const express = require('express');
const router = express.Router();
const { db } = require('./db');

router.get('/', async (req, res) => {
  await db.read();
  res.json(db.data.items);
});


router.put('/:name', async (req, res) => {
  const { name } = req.params;
  const { status } = req.body;
  await db.read();
  const item = db.data.items.find(i => i.name === name);
  if (!item) {
    return res.status(404).json({ error: 'Item not found' });
  }
  if (status) item.status = status;
  await db.write();
  res.json({ message: 'Status updated' });
});

module.exports = router;
