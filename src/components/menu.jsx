import React, { useContext } from "react";
import { BrowserView, MobileView } from "react-device-detect";
import styled from "styled-components";
import {
  Moon as MoonIcon,
  Sun as SunIcon
} from 'react-feather';
import './menu.scss';
import vaporwave from '../imgs/vaporwave_trees.png';

const MenuWrapper = styled.div`
  .active a {
    color: ${props => props.theme.accentColor};
  }
`;
const ThemeToggle = styled.div`
  background: ${props => props.theme.accentColor};
  div:nth-child(1) {
    visibility: ${props => props.theme.name === 'dark' ? 'visible' : 'hidden'};
    opacity: ${props => props.theme.name === 'dark' ? 1 : 0};
  }
  div:nth-child(2) {
    visibility: ${props => props.theme.name === 'light' ? 'visible' : 'hidden'};
    opacity: ${props => props.theme.name === 'light' ? 1 : 0};
  }
  div:nth-child(3) {
    visibility: ${props => props.theme.name === 'vaporwave' ? 'visible' : 'hidden'};
    opacity: ${props => props.theme.name === 'vaporwave' ? 1 : 0};
  }
`;
const Navigation = styled.nav`
  li {
    color: ${props => props.theme.textColor};
    svg {
      background-image: linear-gradient(to bottom, transparent 50%, ${props => props.theme.accentColor} 50%);
      stroke: ${props => props.theme.accentColor};
    }
    &.active svg {
      stroke: ${props => props.theme.backgroundColor};
    }
    img {
      background-image: linear-gradient(to bottom, transparent 50%, ${props => props.theme.accentColor} 50%);
    }
    a:after {
      background: ${props => props.theme.accentColor};
    }
  }
`;

export default class Menu extends React.Component {

  constructor(props) {
    super(props);
    this.props = props;
    this.renderDesktopMenu = this.renderDesktopMenu.bind(this);
    this.renderMobileMenu = this.renderMobileMenu.bind(this);
  }

  renderDesktopMenu() {
    return (
      <React.Fragment>
        <ThemeToggle id={'themeToggle'} onClick={() => this.props.toggleTheme()}>
          <div>
            <MoonIcon strokeWidth={'1.5'}/>
          </div>
          <div>
            <SunIcon strokeWidth={'1.5'}/>
          </div>
          <div>
            <img src={vaporwave} alt={''}/>
          </div>
        </ThemeToggle>
        <Navigation>
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
        </Navigation>
      </React.Fragment>
    );
  }

  renderMobileMenu() {
    return(
      <React.Fragment>
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
      </React.Fragment>
    )
  }

  render() {
    return(
      <MenuWrapper id={'menu'}>
        <BrowserView viewClassName={'menu-desktop'}>
          {this.renderDesktopMenu()}
        </BrowserView>
        <MobileView viewClassName={'menu-mobile'}>
          {this.renderMobileMenu()}
        </MobileView>
      </MenuWrapper>
    )
  }
}