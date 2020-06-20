import React from 'react';
import { isMobileOnly } from "react-device-detect";
import styled from "styled-components";
import {
  Phone as PhoneIcon,
  Mail as MailIcon,
  GitHub as GitHubIcon,
  Linkedin as LinkedinIcon
} from "react-feather";
import SectionTitle from "../lib/SectionTitle";
import './contact.scss';

const ContactLink = styled.a`
  color: ${props => props.theme.textColor};
  &:hover {
    color: ${props => props.theme.accentColor};
  }
`;

const SendInput = styled.input`
  color: ${props => props.theme.textColor};
  border-bottom-color: ${props => props.theme.accentColor2} !important;
  &:focus {
    border-bottom-color: ${props => props.theme.accentColor} !important;
  }
`;

const SendTextarea = styled.textarea`
  color: ${props => props.theme.textColor};
  border-bottom-color: ${props => props.theme.accentColor2} !important;
  &:focus {
    border-bottom-color: ${props => props.theme.accentColor} !important;
  }
`;

const SendButton = styled.button`
  background: ${props => props.theme.accentColor2};
  &:hover {
    background: ${props => props.theme.accentColor};
  }
`;

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
      // {icon: <PhoneIcon/>, text: 'Phone', href: '#section-contact', target: '_self'},
      {icon: <MailIcon/>, text: 'alexling.js@gmail.com', href: 'mailto:alexling.js@gmail.com', target: '_self' },
      {icon: <GitHubIcon/>, text: 'alexling540', href: 'https://github.com/alexling540', target: '_blank'},
      // {icon: <LinkedinIcon/>, text: 'alexander-ling-6b8a28178', href: 'https://www.linkedin.com/in/alexander-ling-6b8a28178/', target: '_blank'}
    ];

    return (
      <ul style={{'textAlign':'left'}}>
        {sections.map((element, i) => (
          <li key={i}>
            <ContactLink href={element.href} target={element.target} rel='noopener noreferrer'>
              <div>
                {element.icon}
                <span>{element.text}</span>
              </div>
            </ContactLink>
          </li>
        ))}
      </ul>
    );
  }

  renderSendEmail() {
    return (
      <form>
        <div>
          <SendInput placeholder="Your Name" type="text" id="contact-Name" />
        </div>
        <div>
          <SendInput placeholder="Your Email" type="email" id="contact-Email" />
        </div>
        <div>
          <SendTextarea rows="3" placeholder="Your message..." id="contact-Message" />
        </div>
        <SendButton type="submit">Submit</SendButton>
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
        <SectionTitle>Contact Me</SectionTitle>
        <div className={'section-content'}>
          {this.renderContent()}
        </div>
      </React.Fragment>
    );
  }
}