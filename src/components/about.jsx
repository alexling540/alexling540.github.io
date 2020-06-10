import React from "react";
import { Timeline, TimelineEvent } from "react-event-timeline";
import { isMobileOnly } from "react-device-detect";
import Swiper from "react-id-swiper";
import styled, { ThemeConsumer } from "styled-components";
import { IconContext } from "react-icons";
import {
  GoCloudDownload as DownloadIcon,
  GoMortarBoard, GoBriefcase, GoMilestone } from "react-icons/go";
import SectionTitle from "../lib/SectionTitle";
import SkillsTable from "../lib/SkillsTable";
import './about.scss'

const ResumeLink = styled.a`
  color: ${props => props.theme.textColor};
  > span {
    border: 2px solid ${props => props.theme.accentColor};
    &:hover {
      background: ${props => props.theme.accentColor};
      svg, span {
        color: black;
      }
    }
  }
`;

const AboutParagraph = styled.p`
  text-align: justify;
  color: ${props => props.theme.textColor};
`;

const params = {
  spaceBetween: 20,
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
          <img src={''} alt={''} style={{
            width: '100%',
          }}/>
        </div>
        <div>
          <AboutParagraph>Howdy! I'm Alexander Ling, a Junior at Texas A&M majoring in Computer Science.</AboutParagraph>
          <p>
            <ResumeLink href={'https://drive.google.com/file/d/1K1iig6_iW95FU5qU2SLp9ZqPaJKFrN82/view?usp=sharing'} target="_blank" rel="noopener noreferrer" id={'download-resume'}>
              <span>
                <span>
                  View Resume
                </span>
                <DownloadIcon height={24} width={24}/>
              </span>
            </ResumeLink>
          </p>
        </div>
      </React.Fragment>
    );
  }

  renderTimeline() {
    return(
      <React.Fragment>
        <div>Timeline</div>
        <ThemeConsumer>
          {theme => (
            <IconContext.Provider
              value={{
                size: '1.5em'
              }}
            >
              <Timeline>
                <TimelineEvent
                  title="Texas A&M University"
                  subtitle="2018-Present"
                  container={'card'}
                  // bubbleStyle={{
                  //   background: theme.backgroundColor,
                  //   borderColor: theme.accentColor
                  // }}
                  bubbleStyle={{
                    background: theme.accentColor,
                    borderColor: theme.accentColor
                  }}
                  icon={<GoMortarBoard/>}
                  // iconColor={theme.accentColor}
                  iconColor={theme.backgroundColor}
                  cardHeaderStyle={{
                    background: theme.accentColor
                  }}
                  titleStyle={{
                    color: 'black'
                  }}
                  subtitleStyle={{
                    color: 'black'
                  }}
                >
                  Studying Computer Science at Texas A&M University
                </TimelineEvent>
              </Timeline>
            </IconContext.Provider>
          )}
        </ThemeConsumer>
      </React.Fragment>
    );
  }

  renderSkills() {
    return(
      <SkillsTable
        skills={[
          {name: 'C++', percent: 40},
          {name: 'Java', percent: 45},
          {name: 'JavaScript', percent: 24},
          {name: 'PostgreSQL', percent: 16},
          {name: 'Python', percent: 15}
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