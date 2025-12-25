const express = require('express');
const router = express.Router();
const db = require('../database');

router.get('/', (req, res) => {
    // VULNERABILITY: IDOR (Insecure Direct Object References)
    // Takes 'id' from query parameter and shows that user's profile without checking authorization
    // Default to logged-in user if no id provided, but allows overriding
    const id = req.query.id || (req.user ? req.user.id : null);

    if (!id) {
        return res.redirect('/login');
    }

    db.get(`SELECT * FROM users WHERE id = ?`, [id], (err, row) => {
        if (err || !row) {
            return res.status(404).send('User not found');
        }
        res.render('profile', { user: req.user, profile: row });
    });
});

module.exports = router;
