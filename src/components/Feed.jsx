import React, {Component} from 'react';
import Post from './Post';

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
            <Post post={post} key={index}/>
          </li>
        ))}
        </ul>
      </div>
    )
  }
}
