import React, {Component} from "react";
import * as Icons from 'react-feather';
import { Timeline, TimelineEvent } from "react-event-timeline";
import SkillsTable from "../lib/SkillsTable";
import 'react-vertical-timeline-component/style.min.css';
import './resume.scss';

export default class Resume extends Component {
  render() {
    return(
      <React.Fragment>
        <h1>Resume</h1>
        <a href={'https://drive.google.com/file/d/1K1iig6_iW95FU5qU2SLp9ZqPaJKFrN82/view?usp=sharing'} target="_blank" rel="noopener noreferrer" id={'download-resume'}>
          <span>
            <span>
              View Resume
            </span>
            <Icons.Download/>
          </span>
        </a>
        <div className={'half'}>
          <Timeline>
            <TimelineEvent title="Texas A&M University"
                           createdAt="2018-Present"
            >
              Studying Computer Science at Texas A&M University
            </TimelineEvent>
          </Timeline>
        </div>
        <div className={'half'}>
          <SkillsTable
            skills={[
              {name: 'Test', percent: 60},
              {name: 'Test two', percent: 20}
            ]}
          />
        </div>
      </React.Fragment>
    )
  }
}