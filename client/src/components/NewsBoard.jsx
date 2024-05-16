import React, { useEffect, useState } from "react";
import Article from "./Article";
import axios from "axios";

const NewsBoard = ({ newsCategory }) => {
  const [content, setContent] = useState([]);
  const [offset, setOffset] = useState(0);
  const limit = 5;

  useEffect(() => {
    fetchData();
  }, [offset]);

  const fetchData = async () => {
    try {
      const { data: response } = await axios.get(
        `http://localhost:8000/read?offset=${offset}&limit=${limit}`
      );
      console.log(response);
      setContent((prevContent) => [...prevContent, ...response]);
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleLoadMore = () => {
    setOffset((prevOffset) => prevOffset + limit);
  };

  return (
    <div className="mt-5 flex flex-col">
      <div className="w-full flex flex-col gap-6 lg:gap-1 ">
        {content.map((news, index) => {
          return (
            <Article
              title={news.title}
              description={news.description}
              image_url={news.image_url}
              pubDate={news.pubDate}
              key={index}
            />
          );
        })}
      </div>
      <button className="btn btn-active mt-5 mx-auto" onClick={handleLoadMore}>Load More</button>
    </div>
  );
};

export default NewsBoard;
