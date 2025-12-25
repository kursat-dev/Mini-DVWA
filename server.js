const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const db = require('./database');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static('public'));
app.set('view engine', 'ejs');

// Vulnerable Middleware for "Auth" (Weak Session)
app.use((req, res, next) => {
    if (req.cookies.user_id) {
        db.get(`SELECT * FROM users WHERE id = ${req.cookies.user_id}`, (err, row) => {
            if (!err && row) {
                req.user = row;
            }
            next();
        });
    } else {
        next();
    }
});

// Import Routes
const authRoutes = require('./routes/auth');
const profileRoutes = require('./routes/profile');
const searchRoutes = require('./routes/search');
const transferRoutes = require('./routes/transfer');
const adminRoutes = require('./routes/admin');

// Routes
app.use('/', authRoutes);
app.use('/profile', profileRoutes);
app.use('/search', searchRoutes);
app.use('/transfer', transferRoutes);
app.use('/admin', adminRoutes);

app.get('/', (req, res) => {
    res.render('index', { user: req.user });
});

// For Vercel, we export the app
// If running locally, listen on port
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
}

module.exports = app;
