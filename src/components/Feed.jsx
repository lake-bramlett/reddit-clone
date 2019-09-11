import React, {Component} from 'react';
import FeedPostPreview from './FeedPostPreview';
import { v4 } from 'uuid';

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
            <FeedPostPreview post={post} key={v4()} index={index} upvote={this.props.upvote} downvote={this.props.downvote}/>
          </li>
        ))}
        </ul>
      </div>
    )
  }
}
