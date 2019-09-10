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
      feedPosts: []
    }
  }

  addPostToList = (post) => {
    console.log('second log:' + post);
    let temp = this.state.feedPosts.slice()
    temp.push(post)
    this.setState({ feedPosts: temp}, console.log(this.state.feedPosts))
  }

  upvote = (key) => {
    console.log('key', key);
    console.log('this works Jacob')
    let temp = this.state.feedPosts.slice()
    console.log('temp', temp);
    temp[key].upvotes++;
    this.setState({ feedPosts: temp })
  }

  downvote = (key) => {
    let temp = this.state.feedPosts.slice()
    temp[key].upvotes--;
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
