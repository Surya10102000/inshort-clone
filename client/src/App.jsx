import { useState } from "react";
import Navbar from "./components/Navbar";
import NewsBoard from "./components/NewsBoard";
import { categories } from "./default";

export default function App() {
  const [newsCategory, setNewsCategory] = useState('most-recent')
  console.log(newsCategory);

  return (
    <>
    <Navbar categories={categories} setNewsCategory={setNewsCategory} />
    <NewsBoard/>
    </>
  )
}