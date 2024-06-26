import React from "react";

const Article = ({title, description, image_url, pubDate}) => {
  console.log(title, description, image_url, pubDate)
  
  return (
    <div className="max-w-lg flex flex-col items-center mx-auto rounded-lg lg:flex-row lg:max-w-4xl ">
      <img className="object-cover text-center w-full rounded-t-lg h-96 lg:w-2/5 lg:max-h-96 lg:rounded-lg " src={image_url === "noUrl" ? "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg" : image_url} alt="article_Image" />


      <div className="flex flex-col justify-between p-6 leading-normal  ">
        <p className="text-2xl text-gray-800 font-light tracking-tight md:text-3xl dark:text-white">{title}</p>
        <p className="mb-2 text-xs text-gray-500 dark:text-gray-400">{pubDate}</p>
        <p className="mb-3 text-md leading-5 tracking-tighter md:text-lg lg:min-h-20 text-gray-600 dark:text-gray-300">{description}</p>

      </div>
    </div>
  );
};

export default Article;
