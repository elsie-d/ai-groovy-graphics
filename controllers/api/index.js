const router = require('express').Router();
const userRoutes = require('./userRoutes');
const openaiRoutes = require('./openaiRoutes'); 
const imageRoutes = require('./imageRoutes');


router.use('/users', userRoutes);
router.use('/openai', openaiRoutes);
router.use('/images', imageRoutes);

module.exports = router;
