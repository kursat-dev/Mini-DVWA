const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const query = req.query.q || '';

    // VULNERABILITY: Reflected XSS
    // The query parameter is passed directly to the view and rendered without escaping
    res.render('search', { user: req.user, query: query });
});

module.exports = router;
