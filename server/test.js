const categories = require('./utils/services')
const Parser = require('rss-parser')
const parser = new Parser()

const print = async () =>{
    const feed = await parser.parseURL(categories.top)
    for (const item of feed.items) {
        if( item.title == item.description){
            console.log(item.title)
        } 

           
        }
    }


print()