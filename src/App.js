import React from 'react';
import './App.css';
import Avatar from './Avatar';
import Message from './Message';
import Author from './Author';

const Time = () => <span className="time">3h ago</span>;

const ReplayButton = () => <i className="fa fa-reply reply-button" />;

const RetweetButton = () => <i className="fa fa-retweet retweet-button" />;

const LikeButton = () => <i className="fa fa-heart like-button" />;

const MoreOptionsButton = () => (
  <i className="fa fa-ellipsis-h more-options-button" />
);

const App = () => {
  return (
    <div className="tweet">
      <Avatar />
      <div className="content">
        <Author />
        <Time />
        <Message />

        <div className="buttons">
          <ReplayButton />
          <RetweetButton />
          <LikeButton />
          <MoreOptionsButton />
        </div>
      </div>
    </div>
  );
};

export default App;
