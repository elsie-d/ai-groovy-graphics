const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  const showLoginSignupLinks = !req.session.logged_in;
  res.render('homepage', {showLoginSignupLinks})
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
      attributes: { exclude: ['password'] }
      // once api and images are ready include the Image model 
     // include: [{ model: Blog }],
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

