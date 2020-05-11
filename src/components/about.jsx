import React from "react";
import { Download as DownloadIcon } from "react-feather";
import { Timeline, TimelineEvent } from "react-event-timeline";
import { isMobileOnly } from "react-device-detect";
import Swiper from "react-id-swiper";
import SectionTitle from "../lib/SectionTitle";
import SkillsTable from "../lib/SkillsTable";
import './about.scss'

const params = {
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: false
  },
  loop: true
};

export default class About extends React.Component {

  constructor(props) {
    super(props);
    this.props = props;
    this.renderAbout = this.renderAbout.bind(this);
    this.renderTimeline = this.renderTimeline.bind(this);
    this.renderSkills = this.renderSkills.bind(this);
    this.renderContent = this.renderContent.bind(this);
  }

  renderAbout() {
    return(
      <React.Fragment>
        <div>
          <img src={''} alt={''} />
        </div>
        <div>
          <p>Howdy! I'm Alexander Ling, a Junior at Texas A&M majoring in Computer Science. </p>
        </div>
        <a href={'https://drive.google.com/file/d/1K1iig6_iW95FU5qU2SLp9ZqPaJKFrN82/view?usp=sharing'} target="_blank" rel="noopener noreferrer" id={'download-resume'}>
          <span>
            <span>
              View Resume
            </span>
            <DownloadIcon/>
          </span>
        </a>
      </React.Fragment>
    );
  }

  renderTimeline() {
    return(
      <Timeline>
        <TimelineEvent title="Texas A&M University"
                       createdAt="2018-Present"
        >
          Studying Computer Science at Texas A&M University
        </TimelineEvent>
      </Timeline>
    );
  }

  renderSkills() {
    return(
      <SkillsTable
        skills={[
          {name: 'Test', percent: 60},
          {name: 'Test two', percent: 20}
        ]}
      />
    );
  }

  renderContent() {
    if (isMobileOnly) {
      return (
        <Swiper {...params}>
          <div>
            {this.renderAbout()}
          </div>
          <div>
            {this.renderTimeline()}
          </div>
          <div>
            {this.renderSkills()}
          </div>
        </Swiper>
      );
    }
    return (
      <React.Fragment>
        <div className={'third'}>
          {this.renderAbout()}
        </div>
        <div className={'third'}>
          {this.renderTimeline()}
        </div>
        <div className={'third'}>
          {this.renderSkills()}
        </div>
      </React.Fragment>
    );
  }

  render() {
    return (
      <React.Fragment>
        <SectionTitle>About Me</SectionTitle>
        <div className={'section-content'}>
          {this.renderContent()}
        </div>
      </React.Fragment>
    );
  }

}