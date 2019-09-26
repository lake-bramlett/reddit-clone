import React, { Component } from "react";

// redux
import { connect } from "react-redux";
// actions
import { upvote, addPost } from "./../actions";

import arrow from "../assets/arrow.png";
// import Moment from 'react-moment';
var moment = require("moment");

class FeedPostPreview extends Component {
  constructor(props) {
    super(props);
  }

  downvote = () => {
    this.props.downvote(this.props.index);
  };

  render() {
    const {
      id,
      icon,
      upvotes,
      title,
      username,
      subreddit,
      hours,
      timestamp
    } = this.props.post;

    const { upvote } = this.props;

    return (
      <div className="feed-post-preview">
        <div className="feed-post-votes">
          <div className="vote-up arrow" onClick={() => upvote(id)}>
            <img src={arrow} alt="up vote" />
          </div>
          <span className="upvotes">{upvotes}</span>
          <div className="vote-down arrow" onClick={this.downvote}>
            <img src={arrow} alt="down vote" />
          </div>
        </div>
        <a href={`/post/${this.props.post.id}`}>
          <div className="feed-post-icon">
            <img src={icon} alt="post preview icon" />
          </div>
          <div className="feed-post-info">
            <h5 className="post-preview-title">{title}</h5>
            <div className="post-preview-sub-info">
              submitted{" "}
              <span className="hours">{moment(timestamp).fromNow()}</span> by{" "}
              <span className="user">{username}</span> to r/
              <span className="subreddit">{subreddit}</span>
            </div>
          </div>
        </a>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { feedPosts: state.posts.feedPosts };
};

export default connect(
  mapStateToProps,
  { upvote }
)(FeedPostPreview);
