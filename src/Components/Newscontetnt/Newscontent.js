import { Container } from '@mui/system'
import React from 'react'
import { NewsCard } from '../NewsCard/NewsCard';
import playstore from "./Images/applestore.png";
import applestore from "./Images/playstore.png";
import "./Newscontent.css";
const Newscontent = ({ newsArray, newsResults, loadMore, setLoadMore }) => {
  return (
    <Container maxWidth="md">
      <div className="content">
        <div className="downloadMessage">
          <span className="downloadTxt">
            For the better experience use our App on your phone 📱
          </span>
          <input
            type="image"
            img
            alt="app photo"
            height="80%"
            src={playstore}
          />
          <input
            type="image"
            img
            alt="app photo"
            height="80%"
            src={applestore}
          />
        </div>

        {newsArray.map((newsItem) => (
          <NewsCard newsItem={newsItem} key={newsItem.title} />
        ))}
        {loadMore <= newsResults && (
          <>
            <hr />
            <button
              className="loadMore"
              onClick={() => setLoadMore(loadMore + 20)}
            >
              Load More
            </button>
          </>
        )}
      </div>
    </Container>
  );
};

export default Newscontent;