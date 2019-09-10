import React, {Component} from 'react'

export default class Post extends Component {
  constructor(props){
    super(props)
  }

  render(){
    const { icon, title, username } = this.props.post
    return (
      <div>
        <h1>{username}</h1>
      </div>
    )
  }
}
