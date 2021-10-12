const favoriteNewsModel = require('../models/favoriteNewsSchema')

const addFavoriteNews = async (req, res) => {

    let addingFavoriteNews = new favoriteNewsModel({

        userUid: req.body.userUid,
        newsHead: req.body.newsHead,
        newsDes: req.body.newsDes,
        newsImg: req.body.newsImg,
        newsUrl: req.body.newsUrl,
        newsFav: req.body.newsFav
    })

    addingFavoriteNews.save()
    .then((response) => {
        // console.log(response, "response success");
        res.status(200).send({result:response,message:"Favorite News Added"})
    })
    .catch((err) => {
        // console.log(err, "error");
        res.status(400).send({result:err.message,message:"Favorite News Not Added"})
    })
}

const getFavoriteNews = async (req,res) => {

    var result = await favoriteNewsModel.find({})
    res.status(200).send({message:"All Favorite News Fetched Successfully", data:result})
}

module.exports = {addFavoriteNews, getFavoriteNews}
