import axios from "axios";
import React, { useEffect, useState } from "react";

import Navbar from "./Components/Navbar/navbarnewsFy.js";
import Newscontent from "./Components/Newscontetnt/Newscontent.js";
function App() {
  const [category, setCategory] = useState("general");
  const [newsArray, setNewsArray] = useState([]);
 const [newsResults, setNewsResults] = useState();

  const newsApi = async () => {
    try {
      const news = await axios.get(
        `https://saurav.tech/NewsAPI/top-headlines/category/${category}/in.json`
      );
     
     setNewsArray(news.data.articles);
        console.log(newsArray);
 setNewsResults(news.data.totalResults);
  
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    newsApi();
  }, [category,newsResults]);
  return (
    <>
      <Navbar setCategory={setCategory} />
      <Newscontent />
    </>
  );
}

export default App;

// // https://saurav.tech/NewsAPI/top-headlines/category/<category>/<country_code>.json

// // `https://saurav.tech/NewsAPI/top-headlines?country=in&category=${category}`;
// BASE_URL = "https://saurav.tech/NewsAPI/";
// top_headlines_api =
//   "https://saurav.tech/NewsAPI/top-headlines/category/<category>/in.json";

// https://saurav.tech/NewsAPI/top-headlines/category/health>/in.json"

//   https://saurav.tech/NewsAPI/top-headlines/category/health/in.json