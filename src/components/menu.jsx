import React, {Component} from "react";
import './menu.css';
import home from '../imgs/home.svg'
import about from '../imgs/user.svg'
import resume from '../imgs/file-text.svg'
import project from '../imgs/package.svg'
import blog from '../imgs/book.svg'
import contact from '../imgs/info.svg'
import light from '../imgs/sun.svg'
import dark from '../imgs/moon.svg'


export default class Menu extends Component {

  render() {
    return(
      <div id={'menu'}>
        <div id={'menu-desktop'}>
          <div>
            <img src={light} alt={''} />
          </div>
          <ul>
            <li data-menuanchor="intro" className="active">
              <a href="#intro">
                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none"
                     stroke="black" strokeWidth="2" strokeLinecap="butt" strokeLinejoin="miter"
                     className="feather feather-home">
                  <path d="M3 9l9-7 9 7v13H3z"/>
                  <polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
                {/*<img src={home} alt={''}/>*/}
              </a>
              <div id={'title'}>Home</div>
            </li>
            <li data-menuanchor="about">
              <a href="#about">
                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none"
                     stroke="black" strokeWidth="2" strokeLinecap="butt" strokeLinejoin="miter"
                     className="feather feather-user">
                  <script xmlns=""/>
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
                {/*<img src={resume} alt={''}/>*/}
              </a>
              <div id={'title'}>About</div>
            </li>
            <li data-menuanchor="resume">
              <a href="#resume">
                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" strokeWidth="2" strokeLinecap="butt" strokeLinejoin="miter"
                     className="feather feather-file-text">
                  <script xmlns=""/>
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                  <polyline points="10 9 9 9 8 9"/>
                </svg>
                {/*<img src={resume} alt={''}/>*/}
              </a>
              <div id={'title'}>Resume</div>
            </li>
            <li data-menuanchor="projects">
              <a href="#projects">
                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none"
                     stroke="black" strokeWidth="2" strokeLinecap="butt" strokeLinejoin="miter"
                     className="feather feather-package">
                  <script xmlns=""/>
                  <line x1="16.5" y1="9.4" x2="7.5" y2="4.21"/>
                  <path
                    d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                  <line x1="12" y1="22.08" x2="12" y2="12"/>
                </svg>
                {/*<img src={project} alt={''}/>*/}
              </a>
              <div id={'title'}>Projects</div>
            </li>
            <li data-menuanchor="blog">
              <a href="#blog">
                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none"
                     stroke="black" strokeWidth="2" strokeLinecap="butt" strokeLinejoin="miter"
                     className="feather feather-book">
                  <script xmlns=""/>
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                </svg>
                {/*<img src={blog} alt={''}/>*/}
              </a>
              <div id={'title'}>Blog</div>
            </li>
            <li data-menuanchor="contact">
              <a href="#contact">
                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none"
                     stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                     className="feather feather-info">
                  <script xmlns=""/>
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="12" y1="16" x2="12" y2="12"/>
                  <line x1="12" y1="8" x2="12.01" y2="8"/>
                </svg>
                {/*<img src={contact} alt={''}/>*/}
              </a>
              <div id={'title'}>Contact</div>
            </li>
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
              <li data-menuanchor="resume"><a href="#resume">Resume</a></li>
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