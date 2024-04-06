import sqlite3 from "sqlite3";
import config from "../config.js";

const db = new sqlite3.Database(config.app.nameDatabase + ".db", sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log(`[DB] Connected to the ${config.app.nameDatabase} database.`);
});

export default db;