import React, {Component} from "react";
import './menu.css';
import home from '../imgs/home.svg'
import home_inv from '../imgs/home_inverted.svg'
import about from '../imgs/user.svg'
import about_inv from '../imgs/user_inverted.svg'
import project from '../imgs/package.svg'
import blog from '../imgs/book.svg'
import contact from '../imgs/info.svg'

export default class Menu extends Component {
  render() {
    return(
      <div id={'menu'}>
        <div id={'menu-desktop'}>
          <ul>
            <li data-menuanchor="intro" className="active"><a href="#intro">
              <img src={home} alt={''}/>
            </a></li>
            <li data-menuanchor="about"><a href="#about">
              <img src={about} alt={''}/>
            </a></li>
            <li data-menuanchor="projects"><a href="#projects">
              <img src={project} alt={''}/>
            </a></li>
            <li data-menuanchor="blog"><a href="#blog">
              <img src={blog} alt={''}/>
            </a></li>
            <li data-menuanchor="contact"><a href="#contact">
              <img src={contact} alt={''}/>
            </a></li>
          </ul>
        </div>
        <div id={'menu-mobile'}>
          <input id="burgerCheckbox" type="checkbox"/>
          <label htmlFor="burgerCheckbox">
            <span></span>
            <span></span>
            <span></span>
          </label>
          <nav>
            <ul>
              <li data-menuanchor="intro" className="active"><a href="#intro">Introduction</a></li>
              <li data-menuanchor="about"><a href="#about">About</a></li>
              <li data-menuanchor="projects"><a href="#projects">Projects</a></li>
              <li data-menuanchor="blog"><a href="#blog">Blog</a></li>
              <li data-menuanchor="contact"><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>
    )
  }
}