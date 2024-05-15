import React from "react";

const Article = () => {
  return (
    <div className="max-w-lg flex flex-col items-center mx-auto rounded-lg lg:flex-row lg:max-w-4xl">
      <img className="object-cover w-full rounded-t-lg h-96 lg:h-56 lg:rounded-lg" src="https://static.toiimg.com/photo/msid-110053020,imgsize-431708.cms" alt="article_Image" />
      <div className="flex flex-col justify-between p-4 leading-normal ">
        <p className="text-2xl text-gray-800 font-light tracking-tight dark:text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut illum rerum voluptas iure!</p>
        <p className="mb-2 text-xs text-gray-500 dark:text-gray-400">07:52 am on Wednesday, 15 May, 2024</p>
        <p className="mb-3 text-md leading-5 tracking-tighter text-gray-600 dark:text-gray-300">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga quasi voluptatem exercitationem ipsum cupiditate quos laborum distinctio neque, inventore aliquid suscipit qui placeat ut, dignissimos, asperiores omnis aperiam iure excepturi dolorum iste dolor. Porro ut, error odit sequi quisquam rerum at asperiores omnis quam! Architecto odit ullam voluptatem soluta accusantium, voluptas amet sapiente iusto maxime, ad voluptate aliquam, quibusdam neque officia placeat temporibus? Laboriosam, sapiente.</p>

      </div>
    </div>
  );
};

export default Article;
