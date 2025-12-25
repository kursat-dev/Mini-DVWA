const express = require('express');
const router = express.Router();
const db = require('../database');

router.get('/login', (req, res) => {
    res.render('login', { user: req.user, error: null });
});

router.post('/login', (req, res) => {
    const { username, password } = req.body;

    // VULNERABILITY: SQL Injection
    // Directly concatenating user input into the query string
    const query = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`;

    console.log(`[SQLi] Executing Query: ${query}`); // Log for educational purposes

    db.get(query, (err, row) => {
        if (err) {
            console.error(err);
            return res.render('login', { user: null, error: 'Database Error' });
        }
        if (row) {
            res.cookie('user_id', row.id);
            return res.redirect('/');
        } else {
            return res.render('login', { user: null, error: 'Invalid Credentials' });
        }
    });
});

router.get('/logout', (req, res) => {
    res.clearCookie('user_id');
    res.redirect('/');
});

module.exports = router;
