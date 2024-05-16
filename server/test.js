const categories = require('./utils/services')
const Parser = require('rss-parser')
const parser = new Parser()

const print = async () =>{
    const feed = await parser.parseURL(categories.top)
    for (const category in categories) {
        const feed = await parser.parseURL(categories[category]);
        for (const item of feed.items) {
            const timestampString = item.pubDate;
            const timestamp = new Date(timestampString).getTime() / 1000; // Convert milliseconds to seconds
            console.log(typeof(timestamp));
                console.log({
                    title: item.title,
                    author: item.creator,
                    description: item.contentSnippet,
                    image_url: item.enclosure?.url,
                    timestamp: item.isoDate,
                    link: item.link,
                    publisher: item.creator,
                    category: category,
                    pubDate : timestamp
                });
            }
        }
    }



print()