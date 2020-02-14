import React, {Component} from "react";
import * as Icons from 'react-feather';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './resume.scss';

export default class Resume extends Component {
  render() {
    return(
      <div>
        <div className={'vertical'}>
          Resume
        </div>
        <h1>Resume</h1>
        <a href={'https://drive.google.com/file/d/1K1iig6_iW95FU5qU2SLp9ZqPaJKFrN82/view?usp=sharing'} target="_blank" rel="noopener noreferrer" id={'download-resume'}>
          <span>
            <span>
              Resume
            </span>
            <Icons.Download/>
          </span>
        </a>
        {/*<div>
        <VerticalTimeline
          animate={false}
          layout={'1-column'}
        >
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="April 2013"
            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          >
            <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
            <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
            <p>
              Strategy, Social Media
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="2011 - present"
            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          >
            <h3 className="vertical-timeline-element-title">Creative Director</h3>
            <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
            <p>
              Creative Direction, User Experience, Visual Design, Project Management, Team Leading
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
        </div>*/}
      </div>
    )
  }
}