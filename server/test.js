const categories = require('./utils/services')

const Parser = require('rss-parser')
const parser = new Parser()


const printNews = async () =>{
    const feed = await parser.parseURL(categories[0]);

    console.log( feed)
}

printNews()
