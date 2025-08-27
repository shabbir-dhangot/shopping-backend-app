// shopping-backend/index.js
const express = require('express');
const app = express();
const port = 3000;

const { initDB } = require('./db');
const itemsRouter = require('./items');

app.use(express.json());

initDB();

app.use('/api/items', itemsRouter);

app.listen(port, () => {
  console.log(`Shopping backend listening at http://localhost:${port}`);
});
