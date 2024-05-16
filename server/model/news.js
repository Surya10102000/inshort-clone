const mongoose = require('mongoose')


const newsSchema = new mongoose.Schema({
    title : {
        type : String ,
        required : true, 
        unique : true
    },
    link : { 
        type : String, 
        required : true
    },
    description : {
        type : String
    },
    author : {
        type : String
    },
    image_url : {
        type : String,
        default : "noUrl"
    },
    category : {
        type : String,
        required : true
    },
    unixtimestamp : {
        type : Number
    },
    pubDate : {type : String},

    timestamp : { type : Date, default : Date.now},
    
});

const inshortNews = mongoose.model("News", newsSchema)

module.exports = inshortNews;