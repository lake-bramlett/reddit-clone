import React, { Component } from 'react';
import HomeHeader from './HomeHeader';
import Feed from  './Feed';

class Home extends Component {
  constructor(props){
    super(props)

    this.state = {
      feedPosts: [{username: "Tim"}]
    }
  }
  render() {
    return (
      <div className="Home">
        <HomeHeader />
        <Feed feedPosts={this.state.feedPosts}/>
      </div>
    )
  }
}


export default Home;
