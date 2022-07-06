import axios from "axios";
import React, { useEffect, useState } from "react";
import { Footer } from "./Components/Footer/Footer.js";

import Navbar from "./Components/Navbar/navbarnews.js";
import Newscontent from "./Components/Newscontetnt/Newscontent.js";
import apiKey from "./data/config.js";
function App() {
  const [category, setCategory] = useState("general");
  const [newsArray, setNewsArray] = useState([]);
 const [newsResults, setNewsResults] = useState();
  const [loadMore, setLoadMore] = useState(20);


  const newsApi = async () => {
    //const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    try {
      const news = await axios.get(
        // `https://saurav.tech/NewsAPI/top-headlines/category/${category}/in.json`
        `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}&pageSize=${loadMore}&category=${category}`
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category,newsResults,loadMore]);
  return (
    <>
      <Navbar setCategory={setCategory} />
      {newsResults && (
        <Newscontent
          newsArray={newsArray}
          newsResults={newsResults}
          loadMore={loadMore}
          setLoadMore={setLoadMore}
        />
      )}
      <Footer />
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