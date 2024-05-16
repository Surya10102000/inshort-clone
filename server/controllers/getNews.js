const News = require('../model/news')

const getNews = async (req, res)=>{
    try {
        let data = await News.find({});
        return res.status(200).json(data)
    } catch (error) {
        console.log(error)
        return res.status(500).json( {msg : error})
    }
}

 const getNewsLimited = async (req,res)=>{
    const {limit , offset } = req.query;

     
    try{
        let data = await News.find().skip(parseInt(offset)).limit(parseInt(limit)).sort({ unixtimestamp : -1 });
        return res.status(200).json(data);
    }catch (error){
        console.log(error)
        return res.status(500).json({ msg : error})
    }
}

module.exports = { getNews, getNewsLimited};