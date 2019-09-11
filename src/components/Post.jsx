import React from 'react';
import moment from 'moment';

function Post (props){

  // onSelectPost = (key) => {
  //   let post = this.props.selectpost(this.props.id)
  //   console.log(post);
  // }


  return(
    <div>
      <h3>{props.post.title}</h3>
      <p>This posts's id: {props.post.id}</p>
    </div>
  )
}

export default Post
