const express = require('express');
const router = express.Router();
const db = require('../database');

router.get('/', (req, res) => {
    if (!req.user) return res.redirect('/login');
    res.render('transfer', { user: req.user, message: null });
});

router.post('/', (req, res) => {
    if (!req.user) return res.redirect('/login');

    const { to_user, amount } = req.body;

    // VULNERABILITY: CSRF
    // No CSRF token verification. A simple form submission from another site can trigger this.

    // Simple logic: Deduct from current user
    const newBalance = req.user.balance - parseInt(amount);

    // Update DB (simplified provided target exists)
    db.run(`UPDATE users SET balance = ? WHERE id = ?`, [newBalance, req.user.id], (err) => {
        if (err) return res.render('transfer', { user: req.user, message: 'Transfer Failed' });
        res.render('transfer', { user: req.user, message: `Successfully transferred ${amount} coins to ${to_user}!` });
    });
});

module.exports = router;
