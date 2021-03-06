const mongoose = require('mongoose');

const favoriteNewsSchema = new mongoose.Schema({

    userUid: {type: String},
    newsHead: {type: String},
    newsDes: {type: String},
    newsImg: {type: String},
    newsUrl: {type: String},
    newsFav: {type: Boolean}
})

const favoriteNewsModel = mongoose.model('favoriteNews', favoriteNewsSchema);

module.exports = favoriteNewsModel
