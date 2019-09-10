import React from 'react';
import snoo from '../assets/reddit.png';


export default function HomeHeader() {
    return (
      <div className="homeHeader">
        <div className="logo-box">
          <img src={snoo} alt='snoo alien' />
        </div>
      </div>
    )
}
