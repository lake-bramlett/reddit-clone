import React from 'react';
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
      <div className="nav">
        <nav>
          <ul>
            <li><Link to="/">POPULAR</Link></li>
            <li><span className="separator">-</span><Link to="/">ALL</Link></li>
            <li><span className="separator">-</span><Link to="/">RANDOM</Link></li>
            <li><span className="separator">-</span><Link to="/">USERS</Link></li>
            <li><span className="separator">-</span><Link to="/">ASKREDDIT</Link></li>
            <li><span className="separator">-</span><Link to="/">NEWS</Link></li>
            <li><span className="separator">-</span><Link to="/">FUNNY</Link></li>
            <li><span className="separator">-</span><Link to="/">PICS</Link></li>
            <li><span className="separator">-</span><Link to="/">WORLDNEWS</Link></li>

          </ul>
        </nav>
      </div>
  )
}
