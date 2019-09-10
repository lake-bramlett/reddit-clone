import React, { Component } from 'react';
import HomeHeader from './HomeHeader';
import Feed from  './Feed';
import SideBar from './SideBar';
import postIcon from '../assets/post-icon.png';

class Home extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div className="Home">
        <HomeHeader />
        <Feed feedPosts={this.props.feedPosts} />
        <SideBar />
      </div>
    )
  }
}


export default Home;
