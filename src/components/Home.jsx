import React, { Component } from 'react';
import HomeHeader from './HomeHeader';
import Feed from  './Feed';

class Home extends Component {
  constructor(props){
    super(props)

    this.state = {
      feedPosts: [{title: "What is a question you posted on AskReddit you really wanted to know but wasn't upvoted enough to be answered?",
                  text: "",
                  username: "Tim",
                  hours: 8,
                  upvotes: 20,
                  subreddit: "AskReddit",
                  icon: null,
      }]
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
