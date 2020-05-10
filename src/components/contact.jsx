import React, {Component} from 'react';
import { Form, Button } from 'react-bootstrap';
import * as Icons from 'react-feather';
import './contact.scss';

export default class Contact extends Component {



  render() {
    return (
      <React.Fragment>
        <h1>Contact Me</h1>
        <div className={'half'} style={{'textAlign':'left'}}>
          <ul>
            <li>
              <a href={'#section-contact'}>
                <div>
                  <Icons.Phone/>
                  <span>Phone</span>
                </div>
              </a>
            </li>
            <li>
              <a href={'mailto:alexling.js@gmail.com'} target='_blank' rel='noopener noreferrer'>
                <div>
                  <Icons.Mail/>
                  <span>alexling.js@gmail.com</span>
                </div>
              </a>
            </li>
            <li>
              <a href={'https://github.com/alexling540'} target='_blank' rel='noopener noreferrer'>
                <div>
                  <Icons.GitHub/>
                  <span>alexling540</span>
                </div>
              </a>
            </li>
            <li>
              <a href={'https://www.linkedin.com/in/alexander-ling-6b8a28178/'} target='_blank' rel='noopener noreferrer'>
                <div>
                  <Icons.Linkedin/>
                  <span>alexander-ling-6b8a28178/</span>
                </div>
              </a>
            </li>
          </ul>
        </div>
        <div className={'half'}>
          <Form>
            <Form.Label>
            </Form.Label>
            <Form.Group controlId="contact-Name">
              <Form.Control type="text" placeholder={'Your Name'} />
            </Form.Group>
            <Form.Group controlId="contact-Email">
              <Form.Control type="email" placeholder={'Your Email'} />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Control as="textarea" rows="3" placeholder={'Your message...'} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </React.Fragment>
    );
  }
}