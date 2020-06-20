import React from "react";
import { BrowserView, MobileView } from "react-device-detect";
import { IconContext } from "react-icons";
import { ThemeConsumer } from "styled-components";
import { FiChevronDown as ChevronDown } from 'react-icons/fi';
import './intro.scss';

export default class Introduction extends React.Component {
  render() {
    return(
      <React.Fragment>
        <BrowserView renderWithFragment>
          <div className={'intro-picture'} style={{
            // 'backgroundImage': "url('https://images.pexels.com/photos/956999/milky-way-starry-sky-night-sky-star-956999.jpeg')"
            'backgroundImage': "url('https://images.pexels.com/photos/207130/pexels-photo-207130.jpeg')",
            'filter': 'blur(8px)'
          }}>
          </div>
        </BrowserView>
        <ThemeConsumer>
          {theme => (
            <React.Fragment>
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
      </React.Fragment>
    );
  }
}