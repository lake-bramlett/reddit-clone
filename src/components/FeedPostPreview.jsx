import React, {Component} from 'react'
import arrow from '../assets/arrow.png'

export default class FeedPostPreview extends Component {
  constructor(props){
    super(props)
  }

  upvote = () => {
    console.log(this.props.index);
    this.props.upvote(this.props.index)
  }

  downvote = () => {
    this.props.downvote(this.props.index)
  }

  render(){
    const { icon, upvotes, title, username, subreddit, hours } = this.props.post;
    return (
        <div className="feed-post-preview">
          <div className="feed-post-votes">
            <div className="vote-up arrow" onClick={this.upvote}>
              <img src={arrow} alt="up vote" />
            </div>
            <span className="upvotes">{upvotes}</span>
            <div className="vote-down arrow" onClick={this.downvote}>
              <img src={arrow} alt="down vote" />
            </div>
          </div>
          <a href="/">
          <div className="feed-post-icon">
            <img src={icon} alt="post preview icon" />
          </div>
          <div className="feed-post-info">
            <h5 className="post-preview-title">{title}</h5>
            <div className="post-preview-sub-info">
              submitted <span className="hours">{hours}</span> hours ago by <span className="user">{username}</span> to r/<span className="subreddit">{subreddit}</span>
            </div>
          </div>
          </a>
        </div>
    )
  }
}
