import React from 'react';
import './App.css';
import Avatar from './Avatar';
import Message from './Message';
import Author from './Author';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';

const Time = () => <span className="time">3h ago</span>;

const ReplayButton = () => <i className="fa fa-reply reply-button" />;

const RetweetButton = () => <i className="fa fa-retweet retweet-button" />;

const LikeButton = () => <i className="fa fa-heart like-button" />;

const MoreOptionsButton = () => (
  <i className="fa fa-ellipsis-h more-options-button" />
);

const testTweet = {
  message: 'Something about cats.',
  gravatar: 'xyz',
  author: {
    handle: 'catperson',
    name: 'IAMA Cat Person',
  },
  likes: 2,
  retweets: 0,
  timestamp: '2016-07-30 21:24:37',
};

const App = ({ tweet = testTweet }) => {
  return (
    <div className="container">
      <div className="column">
        <div className="tweet">
          <Avatar hash={tweet.gravatar} />
          <div className="content">
            <Author />
            <Time />
            <Message text={tweet.message} />

            <div className="buttons">
              <ReplayButton />
              <RetweetButton />
              <LikeButton />
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
