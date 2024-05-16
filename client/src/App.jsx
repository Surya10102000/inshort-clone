import { useState } from "react";
import Navbar from "./components/Navbar";
import NewsBoard from "./components/NewsBoard";
import { categories } from "./default";
import Footer from "./components/Footer";

export default function App() {
  const [newsCategory, setNewsCategory] = useState('most-recent')

  return (
    <>
    <Navbar categories={categories} setNewsCategory={setNewsCategory} />
    <NewsBoard newsCategory={newsCategory}/>
    <Footer/>
    </>
  )
}