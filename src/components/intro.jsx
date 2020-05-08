import React, {Component} from "react";
import ReactTyped from "../lib/ReactTyped";
import './intro.scss';

export default class Introduction extends Component {
  render() {
    return(
      <React.Fragment>
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
      </React.Fragment>
    );
  }
}