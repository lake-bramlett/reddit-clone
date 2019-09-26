import React, { Component } from "react";
import FeedPostPreview from "./FeedPostPreview";
import { v4 } from "uuid";

// redux
import { connect } from "react-redux";

class Feed extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="feed">
        <ul>
          {this.props.feedPosts.map(post => (
            <li key={v4()}>
              <FeedPostPreview post={post} key={v4()} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return { feedPosts: state.posts.feedPosts };
};

export default connect(mapStateToProps)(Feed);
