import React from "react";
import { Download as DownloadIcon } from "react-feather";
import { Timeline, TimelineEvent } from "react-event-timeline";
import { BrowserView, TabletView, MobileOnlyView } from "react-device-detect";
import SectionTitle from "../lib/SectionTitle";
import SkillsTable from "../lib/SkillsTable";
import './about.scss'

export default class About extends React.Component {

  constructor(props) {
    super(props);
    this.props = props;
    this.renderAbout = this.renderAbout.bind(this);
    this.renderTimeline = this.renderTimeline.bind(this);
    this.renderSkills = this.renderSkills.bind(this);
  }

  renderAbout() {
    return(
      <React.Fragment>
        <div>
          <img src={''} alt={''} />
        </div>
        <div>
          ETC ETC ETC
        </div>
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

  render() {
    return (
      <React.Fragment>
        <SectionTitle>About Me</SectionTitle>
        <a href={'https://drive.google.com/file/d/1K1iig6_iW95FU5qU2SLp9ZqPaJKFrN82/view?usp=sharing'} target="_blank" rel="noopener noreferrer" id={'download-resume'}>
          <span>
            <span>
              View Resume
            </span>
            <DownloadIcon/>
          </span>
        </a>
        <BrowserView renderWithFragment>
          <div className={'third'}>
            {this.renderAbout()}
          </div>
          <div className={'third'}>
            {this.renderTimeline()}
          </div>
          <div className={'third'}>
            {this.renderSkills()}
          </div>
        </BrowserView>
        <TabletView renderWithFragment>
          <div className={'third'}>
            {this.renderAbout()}
          </div>
          <div className={'third'}>
            {this.renderTimeline()}
          </div>
          <div className={'third'}>
            {this.renderSkills()}
          </div>
        </TabletView>
        <MobileOnlyView renderWithFragment>
          <div className={'slide'} data-anchor="about">
            {this.renderAbout()}
          </div>
          <div className={'slide'} data-anchor='timeline'>
            {this.renderTimeline()}
          </div>
          <div className={'slide'} data-anchor="skills">
            {this.renderSkills()}
          </div>
        </MobileOnlyView>
      </React.Fragment>
    );
  }

}