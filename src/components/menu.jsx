import React, {Component} from "react";
import './menu.scss';
import home from '../imgs/home.svg'
import about from '../imgs/user.svg'
import resume from '../imgs/file-text.svg'
import project from '../imgs/package.svg'
import blog from '../imgs/book.svg'
import contact from '../imgs/info.svg'
import light from '../imgs/sun.svg'
import dark from '../imgs/moon.svg'

const links = [
  {
    anchor:'fp-intro',
    title: 'Home',
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none"
           stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
           className="feather feather-home">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
        <image src={home} xlinkHref={''} />
      </svg>
    )
  },
  {
    anchor: 'fp-about',
    title: 'About',
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none"
               stroke="black" strokeWidth="2" strokeLinecap="butt" strokeLinejoin="miter"
               className="feather feather-user">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
        <circle cx="12" cy="7" r="4"/>
        <image src={about} xlinkHref={''} />
      </svg>
    )
  },
  {
    anchor: 'fp-resume',
    title: 'Resume',
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none"
           stroke="currentColor" strokeWidth="2" strokeLinecap="butt" strokeLinejoin="miter"
           className="feather feather-file-text">
        <script xmlns=""/>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
        <polyline points="10 9 9 9 8 9"/>
        <image src={resume} xlinkHref={''} />
      </svg>
    )
  },
  {
    anchor: 'fp-projects',
    title: 'Projects',
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none"
           stroke="black" strokeWidth="2" strokeLinecap="butt" strokeLinejoin="miter"
           className="feather feather-package">
        <script xmlns=""/>
        <line x1="16.5" y1="9.4" x2="7.5" y2="4.21"/>
        <path
          d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
        <line x1="12" y1="22.08" x2="12" y2="12"/>
        <image src={project} xlinkHref={''} />
      </svg>
    )
  },
  {
    anchor: 'fp-blog',
    title: 'Blog',
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none"
           stroke="black" strokeWidth="2" strokeLinecap="butt" strokeLinejoin="miter"
           className="feather feather-book">
        <script xmlns=""/>
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
        <image src={blog} xlinkHref={''} />
      </svg>
    )
  },
  {
    anchor: 'fp-contact',
    title: 'Contact',
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none"
           stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
           className="feather feather-info">
        <script xmlns=""/>
        <circle cx="12" cy="12" r="10"/>
        <line x1="12" y1="16" x2="12" y2="12"/>
        <line x1="12" y1="8" x2="12.01" y2="8"/>
        <image src={contact} xlinkHref={''}/>
      </svg>
    )
  }
];

export default class Menu extends Component {

  constructor(props) {
    super(props);
    this.props = props;
    let anchors = [];
    links.forEach((element) => {
      anchors.push(element.anchor);
    });
    this.props.setAnchors(anchors);
  }

  render() {
    return(
      <div id={'menu'}>
        <div id={'menu-desktop'}>
          <div id={'themeToggle'}>
            <div onClick={() => this.props.setTheme('light')}>
              <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                   className="feather feather-moon">
                <script xmlns=""/>
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                <image src={dark} xlinkHref={''} />
              </svg>
            </div>
            <div onClick={() => this.props.setTheme('dark')}>
              <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                   className="feather feather-sun">
                <script xmlns=""/>
                <circle cx="12" cy="12" r="5"/>
                <line x1="12" y1="1" x2="12" y2="3"/>
                <line x1="12" y1="21" x2="12" y2="23"/>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                <line x1="1" y1="12" x2="3" y2="12"/>
                <line x1="21" y1="12" x2="23" y2="12"/>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                <image src={light} xlinkHref={''} />
              </svg>
            </div>
          </div>
          <ul>
            {links.map((element, index) => (
              <li data-menuanchor={element.anchor} key={index}>
                <a href={'#' + element.anchor}>
                  {element.svg}
                </a>
                <div id={'title'} key={index}>{element.title}</div>
              </li>
            ))}
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
              {links.map((element, index) => (
                <li data-menuanchor={element.anchor} key={index}>
                  <a href={'#' + element.anchor}>{element.title}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    )
  }
}