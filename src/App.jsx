import React, { Component } from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home'
import NewPostForm from './components/NewPostForm';
import postIcon from './assets/post-icon.png';

import Routes from './Routes';

import reactLogo from './assets/React-icon.png';

class App extends Component{
  constructor(props){
    super(props)

    this.state = {
      feedPosts: [{
        title: 'Megathread: National Security Adviser John Bolton has resigned at the request of the president, citing policy disagreements',
        text: 'President Trump fired John R. Bolton, his third national security adviser, on Tuesday amid fundamental disagreements over how to handle major foreign policy challenges like Iran, North Korea and Afghanistan. Mr. Trump announced the decision on Twitter. "I informed John Bolton last night that his services are no longer needed at the White House. I disagreed strongly with many of his suggestions, as did others in the Administration, and therefore I asked John for his resignation, which was given to me this morning. I thank John very much for his service. I will be naming a new National Security Advisor next week. - NY Times(edited)',
        username: 'PoliticsModeratorBot',
        hours: 6,
        upvotes: 0,
        subreddit: 'Politics',
        icon: postIcon,
      },
      {
        title: 'Printer',
        text: '',
        username: 'dogcat',
        hours: 4,
        upvotes: 0,
        subreddit: 'funny',
        icon: postIcon,
      },

      ]
    }
  }


  addPostToList = (post) => {
    console.log('second log:' + post);
    let temp = this.state.feedPosts.slice()
    temp.push(post)
    temp.sort((a, b) => (a.upvotes < b.upvotes) ? 1 : -1)
    this.setState({ feedPosts: temp}, console.log(this.state.feedPosts))
  }

  upvote = (key) => {
    console.log('key', key);
    console.log('this works Jacob')
    let temp = this.state.feedPosts.slice()
    console.log('temp', temp);
    temp[key].upvotes++;
    temp.sort((a, b) => (a.upvotes < b.upvotes) ? 1 : -1)
    this.setState({ feedPosts: temp })
  }

  downvote = (key) => {
    let temp = this.state.feedPosts.slice()
    temp[key].upvotes--;
    temp.sort((a, b) => (a.upvotes < b.upvotes) ? 1 : -1)
    this.setState({ feedPosts: temp })
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Navbar />
            <Switch>
              <Route exact path="/" render={()=><Home feedPosts={this.state.feedPosts} upvote={this.upvote} downvote={this.downvote}/>} />
              <Route exact path="/new_post" render={()=><NewPostForm callback={this.addPostToList} />} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
