import React from 'react';
import { Link } from 'react-router-dom';
import NewPostForm from './NewPostForm';

export default function SideBar() {
  return (
      <div className="sideBar">
        <button><Link to="/new_post" >Submit Text Post</Link></button>
      </div>
  )
}
