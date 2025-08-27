// shopping-backend/index.js
const express = require('express');
const cors = require("cors");
const app = express();

const port = 3000;

const { initDB } = require('./db');
const itemsRouter = require('./items');

app.use(express.json());
app.use(cors());

initDB();

app.use('/api/items', itemsRouter);

app.listen(port, () => {
  console.log(`Shopping backend listening at http://localhost:${port}`);
});
