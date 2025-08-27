// shopping-backend/db.js
const { Low } = require('lowdb');
const { JSONFile } = require('lowdb/node');
const path = require('path');
const dbFile = path.join(__dirname, 'db.json');
const adapter = new JSONFile(dbFile);
const db = new Low(adapter,{});

async function initDB() {
  await db.read();
  if (!db.data) {
    db.data = defaultData;
    await db.write();
  }
}

module.exports = { db, initDB };
