import React, { Component } from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home'
import NewPostForm from './components/NewPostForm';
import postIcon from './assets/post-icon.png';
import Moment from 'react-moment';
import fakerFile from './assets/postData.json';
import Post from './components/Post'

// adding the post-icon to each post in fakerFile
fakerFile.forEach(function(post){
  post["icon"] = postIcon
})




var moment = require('moment');

import Routes from './Routes';

import reactLogo from './assets/React-icon.png';

class App extends Component{
  constructor(props){
    super(props)

    this.state = {
      feedPosts: fakerFile
    }
  }


  addPostToList = (post) => {
    let temp = this.state.feedPosts.slice()
    post.timestamp = moment(moment()).fromNow() //this will be retooled in the future for when state changes and instead inside moment() would be a time stamp, and the logic here will live in the state change.
    temp.push(post)
    temp.sort((a, b) => (a.upvotes < b.upvotes) ? 1 : -1)
    this.setState({ feedPosts: temp})
  }

  upvote = (key) => {
    let temp = this.state.feedPosts.slice()
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

  handleSelectPost = (key) => {
    const paramsId = parseInt(key);
    let temp = this.state.feedPosts.slice();
    // return temp[key];
    const post = temp.filter( post => {
      console.log(post.id);
      console.log(paramsId);
      if (post.id === paramsId){
        return post
      }

    })
    console.log("this is the handleSelectPost post:", post);
    return post[0]
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
              <Route exact path="/post/:id" render={ (props)=> <Post post={this.handleSelectPost(props.match.params.id)}/>}  />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
