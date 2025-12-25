const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:'); // Using in-memory DB for simplicity and reset on restart

db.serialize(() => {
    // Users table
    db.run("CREATE TABLE users (id INTEGER PRIMARY KEY, username TEXT, password TEXT, balance INTEGER, bio TEXT)");

    // Seed Users (Plaintext passwords for educational visibility)
    const stmt = db.prepare("INSERT INTO users VALUES (?, ?, ?, ?, ?)");
    stmt.run(1, 'admin', 'admin123', 10000, 'System Administrator');
    stmt.run(2, 'user1', 'pass123', 100, 'Regular User');
    stmt.run(3, 'alice', 'alicepass', 500, 'Alice Wonderland');
    stmt.run(4, 'bob', 'bobpass', 300, 'Bob Builder');
    stmt.finalize();

    console.log("Database initialized with seed data.");
});

module.exports = db;
