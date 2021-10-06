const express = require('express');
const router = express.Router();

router.use('/auth', require('./authRouter'));
router.use('/favoriteNews', require('./favoriteNewsRouter'));

module.exports = router
