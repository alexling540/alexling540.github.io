import React, {Component} from "react";
import './contact.css';

export default class Contact extends Component {
  render() {
    return (
      <div>
        <div className={'half'}>
          <ul>
            <li>Phone</li>
            <li>Email</li>
            <li>GitHub</li>
            <li>Linkedin</li>
          </ul>
        </div>
        <div className={'half'}>
          <form>
            <div><input type={'text'} placeholder={'Your Name'} aria-placeholder={'Your Name'} required aria-required/></div>
            <div><input type={'text'} placeholder={'Your Email'} aria-placeholder={'Your Email'}
                   pattern={"\\A(?=[a-z0-9@.!#$%&'*+/=?^_‘{|}~-]{6,254}\\z)(?=[a-z0-9.!#$%&'*+/=?^_‘{|}~-]{1,64}@)[a-z0-9!#$%&'*+/=?^_‘{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_‘{|}~-]+)*@ (?:(?=[a-z0-9-]{1,63}\\.)[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+(?=[a-z0-9-]{1,63}\\z)[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\z"} required aria-required/></div>
            <div><textarea type={'text'} placeholder={'Your Message'} aria-placeholder={'Your Message'} required aria-required/></div>
            <div><button>Send</button></div>
          </form>
        </div>
      </div>
    );
  }
}