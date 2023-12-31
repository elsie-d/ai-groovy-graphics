const router = require('express').Router();
const { query } = require('express');
const { User, Image } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  const showLoginSignupLinks = !req.session.logged_in;
  const showHomeLink = true;
  const showProfileLink = req.session.logged_in;
  res.render('homepage', {showLoginSignupLinks, showHomeLink, showProfileLink})
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('profile');
    return;
  }
  
  res.render('login');
});


router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      // Include images saved by user
      include: [{ model: Image }]
    });
    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;