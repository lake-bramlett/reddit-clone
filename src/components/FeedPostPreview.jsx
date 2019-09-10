import React, {Component} from 'react'
import arrow from '../assets/arrow.png'

export default class FeedPostPreview extends Component {
  constructor(props){
    super(props)
  }

  render(){
    const { icon, upvotes, title, username, subreddit, hours } = this.props.post;
    return (
      <div className="feed-post-preview">
        <div className="feed-post-votes">
          <div className="vote-up arrow">
            <img src={arrow} alt="up vote" />
          </div>
          <span className="upvotes">{upvotes}</span>
          <div className="vote-down arrow">
            <img src={arrow} alt="down vote" />
          </div>
        </div>
        <div className="feed-post-icon">
          <img src={icon} alt="post preview icon" />
        </div>
        <div className="feed-post-info">
          <h5 className="post-preview-title">{title}</h5>
          <div className="post-preview-sub-info">
            submitted <span className="hours">{hours}</span> hours ago by <span className="user">{username}</span> to r/<span className="subreddit">{subreddit}</span>
          </div>
        </div>
      </div>
    )
  }
}
