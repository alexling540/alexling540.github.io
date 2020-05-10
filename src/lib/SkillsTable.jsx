import React from "react";
import styled from "styled-components";
import { Line } from "rc-progress";
import "./SkillsTable.scss";

const SkillRow = styled.div`
  .skills-title {
    color: ${props => props.theme.textColor};
  }
  .skill-name {
    color: ${props => props.theme.textColor};
  }
  .skill-line {
    border-color: ${props => props.theme.accentColor};
    .rc-progress-line-path {
      stroke: ${props => props.theme.accentColor};
    }
  }
`;

export default class SkillsTable extends React.Component {

  render () {
    return (
      <div style={this.props.style} className={'skills-table'}>
        <div className={'skills-title'}>Skills</div>
        {this.props.skills.map((element, i) => (
          <SkillRow key={i} className={'skill-row'}>
            <span className={'skill-name'}>{element.name}</span>
            <Line className={'skill-line'} percent={element.percent} strokeLinecap="square" trailColor={'transparent'}/>
          </SkillRow>
        ))}
      </div>
    )
  }
}