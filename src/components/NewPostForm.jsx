import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

// redux
import { connect } from "react-redux";

// actions
import { addPost } from "./../actions";

import postIcon from "../assets/post-icon.png";

class NewPostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      text: ""
    };
  }

  handleChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  };

  handleNewPostFormSubmission = e => {
    e.preventDefault();

    this.props.addPost({
      title: this.state.title,
      text: this.state.text,
      username: "Tim",
      hours: 8,
      upvotes: 0,
      subreddit: "AskReddit",
      icon: postIcon,
      timestamp: new Date()
    });

    this.setState({ stateChange: true });
  };

  render() {
    const stateChange = this.state.stateChange;
    if (stateChange === true) {
      return <Redirect to="/" />;
    }

    return (
      <div className="newposts">
        <div className="new-post-form">
          <form onSubmit={this.handleNewPostFormSubmission}>
            <input
              onChange={this.handleChange}
              type="text"
              id="title"
              placeholder="title"
            />
            <input
              onChange={this.handleChange}
              type="text"
              id="text"
              placeholder="your post"
            />
            <div className="center">
              <button className="form-btn" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { addPost }
)(NewPostForm);
