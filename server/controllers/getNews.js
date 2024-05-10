const News = require('../model/news')

const getNews = async (req, res)=>{
    try {
        let data = await News.find({});
        res.status(200).json(data)
    } catch (error) {
        response.status(500).json( {msg : error.message})
    }
}

module.exports = {
    getNews
}