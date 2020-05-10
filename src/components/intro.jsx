import React, {Component} from "react";
import {BrowserView, MobileView} from "react-device-detect";
import ReactTyped from "../lib/ReactTyped";
import {ChevronDown} from "react-feather";
import './intro.scss';

export default class Introduction extends Component {
  render() {
    return(
      <React.Fragment>
        <BrowserView renderWithFragment>
          <div className={'intro-picture'} style={{
            // 'backgroundImage': "url('https://images.pexels.com/photos/956999/milky-way-starry-sky-night-sky-star-956999.jpeg')"
            'backgroundImage': "url('https://images.pexels.com/photos/207130/pexels-photo-207130.jpeg')"
          }}>
          </div>
          <div className={'intro-banner'}>
            <ReactTyped
              strings={[
                'Welcome'
              ]}
            />
          </div>
          <ChevronDown className={'intro-down'}/>
        </BrowserView>
        <MobileView renderWithFragment>
          Welcome
        </MobileView>
      </React.Fragment>
    );
  }
}