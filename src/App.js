import React from 'react';
import './App.css';

import Avatar from './Avatar';
import Message from './Message';
import Author from './Author';
import Home from './Pages/Home';
import About from './Pages/About';
import Time from './Time';
import { Routes, Route, Link } from 'react-router-dom';
const testTweet = {
  message: 'Something about cats.',
  gravatar: 'xyz',
  author: {
    handle: 'catperson',
    name: '😊',
  },
  likes: 2,
  retweets: 15,
  timestamp: '2016-07-30 21:24:37',
};

function getRetweetButtonCount(count) {
  if (count > 0) {
    return <span className="retweet-count">{count}</span>;
  } else {
    return null;
  }
}
const ReplayButton = () => <i className="fa fa-reply reply-button" />;

const RetweetButton = ({ count }) => {
  return (
    <span className="retweet-button">
      <i className="fa fa-retweet retweet-button" />
      {getRetweetButtonCount(count)}
    </span>
  );
};

const LikeButton = ({ count }) => (
  <span className="like-button">
    <i className="fa fa-heart" />
    {count > 0 && <span className="like-count">{count}</span>}
  </span>
);

const MoreOptionsButton = () => (
  <i className="fa fa-ellipsis-h more-options-button" />
);

const App = ({ tweet = testTweet }) => {
  return (
    <div className="container">
      <div className="column">
        <div className="tweet">
          <Avatar hash={tweet.gravatar} />
          <div className="content">
            <Author author={tweet.author} />
            <Time />
            <Message text={tweet.message} />

            <div className="buttons">
              <ReplayButton />
              <RetweetButton count={tweet.retweets} />
              <LikeButton count={tweet.likes} />
              <MoreOptionsButton />
            </div>
          </div>
          <nav>
            <Link className="link" to="/">
              Home
            </Link>
            <Link className="link" to="/about">
              About
            </Link>
          </nav>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
