const categories = require('../utils/services')
const Parser = require('rss-parser')
const parser = new Parser()
const News = require('../model/news')
// Function to fetch and update RSS feeds in the database
const storeNews = async () => {
    try {
        for (const category in categories) {
            const feed = await parser.parseURL(categories[category]);
            for (const item of feed.items) {
                const existingNews = await News.findOne({ title: item.title });
                if (!existingNews) {
                    console.log(JSON.stringify(item))
                    await News.create({
                        title: item.title,
                        author: item.creator,
                        description: item.contentSnippet,
                        image_url: item.enclosure?.url,
                        timestamp: item.isoDate,
                        link: item.link,
                        publisher: item.creator,
                        category: category
                    });
                }
            }
        }
        console.log('Feed data stored successfully');
    } catch (error) {
        console.error('Error fetching or storing feed data:', error);
    }
};


module.exports = storeNews