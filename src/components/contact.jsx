import React from 'react';
import { isMobileOnly } from "react-device-detect";
import {
  Phone as PhoneIcon,
  Mail as MailIcon,
  GitHub as GitHubIcon,
  Linkedin as LinkedinIcon
} from "react-feather";
import './contact.scss';

export default class Contact extends React.Component {

  constructor(props) {
    super(props);
    this.props = props;
    this.renderContactInfo = this.renderContactInfo.bind(this);
    this.renderSendEmail = this.renderSendEmail.bind(this);
    this.renderContent = this.renderContent.bind(this);
  }

  renderContactInfo() {
    const sections = [
      {icon: <PhoneIcon/>, text: 'Phone', href: '#section-contact', target: '_self'},
      {icon: <MailIcon/>, text: 'alexling.js@gmail.com', href: 'mailto:alexling.js@gmail.com', target: '_self' },
      {icon: <GitHubIcon/>, text: 'alexling540', href: 'https://github.com/alexling540', target: '_blank'},
      {icon: <LinkedinIcon/>, text: 'alexander-ling-6b8a28178', href: 'https://www.linkedin.com/in/alexander-ling-6b8a28178/', target: '_blank'}
    ];

    return (
      <ul style={{'textAlign':'left'}}>
        {sections.map((element, i) => (
          <li key={i}>
            <a href={element.href} target={element.target} rel='noopener noreferrer'>
              <div>
                {element.icon}
                <span>{element.text}</span>
              </div>
            </a>
          </li>
        ))}
      </ul>
    );
  }

  renderSendEmail() {
    return (
      <form>
        <div>
          <input placeholder="Your Name" type="text" id="contact-Name" />
        </div>
        <div>
          <input placeholder="Your Email" type="email" id="contact-Email" />
        </div>
        <div>
          <textarea rows="3" placeholder="Your message..." id="contact-Message" />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }

  renderContent() {
    if (isMobileOnly) {
      return (
        <React.Fragment>
          {this.renderContactInfo()}
        </React.Fragment>
      );
    }
    return (
      <React.Fragment>
        <div className={'half'}>
          {this.renderContactInfo()}
        </div>
        <div className={'half'}>
          {this.renderSendEmail()}
        </div>
      </React.Fragment>
    );
  }

  render() {
    return (
      <React.Fragment>
        <h1>Contact Me</h1>
        <div className={'section-content'}>
          {this.renderContent()}
        </div>
      </React.Fragment>
    );
  }
}