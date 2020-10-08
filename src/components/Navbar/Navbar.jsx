import React from "react";
import "./Navbar.css";
import {Link} from 'react-router-dom';

export default function Navbar() {
  return (
    <>
      <div className="info">
        <h1 style={{ margin: 0 }}>Warren Sunada-Wong</h1>
        <div className="info-bar">
          <p className="info-item">wsunadawong@college.harvard.edu</p>
        </div>
        <div className="info-bar">
          <Link 
            className="info-link" 
            to={{pathname:"https://instagram.com"}}
            target="_blank"
          >
            Instagram
          </Link>
          <Link 
            className="info-link" 
            to={{pathname:"https://spotify.com"}}
            target="_blank"
          >
            Spotify
          </Link>
        </div>
      </div>
      <div className="nav-background">
        <Link
          className="nav-item"
          to = {{pathname: "/about"}}
        >
          About
        </Link>
        <Link
          className="nav-item"
          to = {{pathname: "/experience"}}
        >
          Experience
        </Link>
        <Link
          className="nav-item"
          to = {{pathname: "/projects"}}
        >
          Projects
        </Link>
      </div>
    </>
  );
}
