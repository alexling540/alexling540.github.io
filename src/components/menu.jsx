import React, {Component} from "react";
import * as Icon from 'react-feather';
import './menu.scss';
import vaporwave from '../imgs/vaporwave_trees.png';

export default class Menu extends Component {

  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return(
      <div id={'menu'}>
        <div id={'menu-desktop'}>
          <div id={'menu-vertical-wrapper'}>
            <div className={'vertical-title'}>
              {this.props.sections.map((element, index) => (
                <div data-menuanchor={element.anchor} key={index}>
                  {element.title}
                </div>
              ))}
            </div>
          </div>
          <div id={'themeToggle'}>
            <div onClick={() => this.props.setTheme('light')}>
              <Icon.Moon strokeWidth={'1.5'}/>
            </div>
            <div onClick={() => this.props.setTheme('dark')}>
              <Icon.Sun strokeWidth={'1.5'}/>
            </div>
            <div onClick={() => this.props.setTheme('dark')}>
              <img src={vaporwave} alt={''}/>
            </div>
          </div>
          <ul>
            {this.props.sections.map((element, index) => (
              <li data-menuanchor={element.anchor} key={index}>
                <a href={'#' + element.anchor}>
                  {element.icon}
                </a>
                <div className={'nav-title'} key={index}>{element.title}</div>
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
              {this.props.sections.map((element, index) => (
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