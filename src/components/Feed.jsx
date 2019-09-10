import React, {Component} from 'react';
import FeedPostPreview from './FeedPostPreview';

export default class Feed extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div className="feed">
        <ul>
        {this.props.feedPosts.map((post, index) => (
          <li>
            <FeedPostPreview post={post} key={index} index={index} upvote={this.props.upvote} downvote={this.props.downvote}/>
          </li>
        ))}
        </ul>
      </div>
    )
  }
}
