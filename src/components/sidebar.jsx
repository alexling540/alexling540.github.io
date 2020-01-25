import React, {Component} from "react";
import './sidebar.css'
import img_intro from './icons8-home-500.svg'

export default class Sidebar extends Component {
  render() {
    return(
      <div>
        <nav className="sidebar">
          <ul>
            <li><a href="#intro"><img src={img_intro} alt={''} /><span>Introduction</span></a></li>
            <li><a href="#about"><img src={img_intro} alt={''} /><span>About</span></a></li>
            <li><a href="#projects"><img src={img_intro} alt={''} /><span>Projects</span></a></li>
            <li><a href="#blog"><img src={img_intro} alt={''} /><span>Blog</span></a></li>
            <li><a href="#contact"><img src={img_intro} alt={''} /><span>Contact</span></a></li>
          </ul>
        </nav>
        <nav className="sidebar2">
          <ul>
            <li>
              <div className="square"><a href={'#intro'}><img src={img_intro} alt={''} /></a>
                <span>Introduction</span></div>
            </li>
            <li>
              <div className="square"><img src={img_intro} /></div>
            </li>
            <li>
              <div className="square"><img src={img_intro} /></div>
            </li>
            <li>
              <div className="square"><img src={img_intro} /></div>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
