import React from "react";
import {Line} from "rc-progress";
import "./SkillsTable.scss";

export default class SkillsTable extends React.Component {

  render () {
    return (
      <div style={this.props.style} className={'skills-table'}>
        <div className={'skills-title'}>Skills</div>
        {this.props.skills.map((element, i) => (
          <div key={i} className={'skills-row'}>
            <span className={'skill-name'}>{element.name}</span>
            <Line className={'skill-line'} percent={element.percent} strokeLinecap="square" trailColor={'transparent'}/>
          </div>
        ))}
      </div>
    )
  }
}