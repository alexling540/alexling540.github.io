import React, {Component} from "react";
import './menu.css';

export default class Menu extends Component {
  render() {
    return(
      <div id={'menu'}>
        <ul>
          <li data-menuanchor="intro" className="active"><a href="#intro">Introduction</a></li>
          <li data-menuanchor="about"><a href="#about">About</a></li>
          <li data-menuanchor="projects"><a href="#projects">Projects</a></li>
          <li data-menuanchor="blog"><a href="#blog">Blog</a></li>
          <li data-menuanchor="contact"><a href="#contact">Contact</a></li>
          <li>
            <input id="burgerTick" type="checkbox"/>
            <label htmlFor="burgerTick" className={'burger'}>
              <span></span>
              <span></span>
              <span></span>
            </label>
            <nav id={'fullscreenNav'}>
              <ul>
                <li><a href="#">Link #1</a></li>
                <li><a href="#">Link #2</a></li>
                <li><a href="#">Link #3</a></li>
              </ul>
            </nav>
          </li>
        </ul>
      </div>
    )
  }
}