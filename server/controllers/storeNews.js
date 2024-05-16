const categories = require("../utils/services");
const Parser = require("rss-parser");
const parser = new Parser();
const News = require("../model/news");
// Function to fetch and update RSS feeds in the database
const storeNews = async () => {
  try {
    for (const category in categories) {
      const feed = await parser.parseURL(categories[category]);
      for (const item of feed.items) {
        const existingNews = await News.findOne({ title: item.title });
        if (!existingNews) {
          //   const timestamp = new Date(item.pubDate).getTime() / 1000;

          const timestampString = item.pubDate
          let timestamp;

          // Check if the string contains the time zone abbreviation "PT"
          if (timestampString.includes("PT")) {
            // Remove "PT" from the string
            // Parse the date string
            const date = new Date(timestampString.replace("PT", "").trim());

            // Adjust for Pacific Time Zone offset (-7 hours from UTC)
            timestamp = date.getTime() / 1000 - 7 * 60 * 60;
          } else {
            // If the time zone is not PT, proceed as before
            timestamp = new Date(timestampString).getTime() / 1000;
          }

          await News.create({
            title: item.title,
            author: item.creator,
            description: item.contentSnippet,
            image_url: item.enclosure?.url,
            timestamp: item.isoDate,
            link: item.link,
            publisher: item.creator,
            unixtimestamp: timestamp,
            category: category,
            pubDate: item.pubDate,
          });
        }
      }
    }
    console.log("Feed data stored successfully");
  } catch (error) {
    console.error("Error fetching or storing feed data:", error);
  }
};

module.exports = storeNews;
