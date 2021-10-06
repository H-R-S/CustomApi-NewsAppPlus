const express = require('express');
const router = express.Router();
const {addFavoriteNews, getFavoriteNews} = require('../controller/favoriteNews');

router.post('/addFavoriteNews', addFavoriteNews);
router.get('/getFavoriteNews', getFavoriteNews);

module.exports = router