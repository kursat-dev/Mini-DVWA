const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    // VULNERABILITY: Weak Auth Check / Auth Bypass
    // Checks for a "role" cookie that can be easily manipulated by the user
    const role = req.cookies.role;

    if (role === 'admin') {
        res.render('admin', { user: req.user, message: 'Welcome, Administrator! Flag: {ADMIN_ACCESS_GRANTED}' });
    } else {
        res.render('admin', { user: req.user, message: 'Access Denied. You are not an admin.' });
    }
});

module.exports = router;
