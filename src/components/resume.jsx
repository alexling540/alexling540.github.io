import React, {Component} from "react";
import * as Icons from 'react-feather';
import { Timeline, TimelineEvent } from "react-event-timeline";
import 'react-vertical-timeline-component/style.min.css';
import { Line } from "rc-progress";
import './resume.scss';

export default class Resume extends Component {
  render() {
    return(
      <div>
        <h1>Resume</h1>
        <a href={'https://drive.google.com/file/d/1K1iig6_iW95FU5qU2SLp9ZqPaJKFrN82/view?usp=sharing'} target="_blank" rel="noopener noreferrer" id={'download-resume'}>
          <span>
            <span>
              Resume
            </span>
            <Icons.Download/>
          </span>
        </a>
        <Timeline>
          <TimelineEvent title="John Doe sent a SMS"
                         createdAt="2016-09-12 10:06 PM"
          >
            I received the payment for $543. Should be shipping the item within a couple of hours.
          </TimelineEvent>
          <TimelineEvent
            title="You sent an email to John Doe"
            createdAt="2016-09-11 09:06 AM"
          >
            Like we talked, you said that you would share the shipment details? This is an urgent order and so I
            am losing patience. Can you expedite the process and pls do share the details asap. Consider this a
            gentle reminder if you are on track already!
          </TimelineEvent>
        </Timeline>
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