import React, {Component} from "react";
import * as Icons from 'react-feather';
import PDF from '../media/Alexander_Ling_Resume_v3.pdf';
import './resume.scss';

export default class Resume extends Component {
  render() {
    return(
      <div>
        <h1>Resume</h1>
        <a href={PDF} target="_blank" rel="noopener noreferrer" id={'download-resume'}>
          <span>
            <span>
              Resume
            </span>
            <Icons.Download/>
          </span>
        </a>
        <div className={'vertical'}>
          Resume
        </div>
      </div>
    )
  }
}