import React from "react";
import { BrowserView, MobileView } from "react-device-detect";
import { IconContext } from "react-icons";
import { ThemeConsumer } from "styled-components";
import { FiChevronDown as ChevronDown } from 'react-icons/fi';
import './intro.scss';

export default class Introduction extends React.Component {
  render() {
    return(
      <ThemeConsumer>
        {theme => (
          <React.Fragment>
            <BrowserView renderWithFragment>
              <div className={'intro-picture'} style={{
                'backgroundImage': `url("${theme.introBackground}")`,
                'filter': 'blur(1px)'
              }}>
              </div>
            </BrowserView>
            <div className={'intro-banner'} style={{
              color: theme.textColor
            }}>
              Welcome
            </div>
            <IconContext.Provider value={{
              color: theme.textColor
            }}>
              <ChevronDown className={'intro-down'}/>
            </IconContext.Provider>
          </React.Fragment>
        )}
      </ThemeConsumer>
    );
  }
}