import * as React from 'react';
import * as _ from 'lodash';

import FooterStyles from './styles';
import Icon from '../Icon';
import links from './links';

import { SocialIconType } from '../../utils/iconMap';

export default class Footer extends React.Component {
  static renderContactForm = () => (
    <div className="contact-form">
      <h3>Contact Me!</h3>
      <form
        className="contact mb-0"
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-recaptcha="true"
      >
        <div className="flex-row items-baseline top-row">
          <div className="input-wrapper">
            <label className="flex-col items-start" htmlFor="name">
              <span className="label">Name</span>
              <input className="pr-h" type="text" name="name" id="name" />
            </label>
          </div>
          <div className="input-wrapper">
            <label className="flex-col items-start" htmlFor="email">
              <span className="label">Email</span>
              <input className="pr-h" type="email" name="email" id="email" />
            </label>
          </div>
        </div>
        <div>
          <label className="flex-col items-start" htmlFor="message">
            <span className="label">Message</span>
            <textarea className="pr-h" name="message" id="message" />
          </label>
        </div>
        <div data-netlify-recaptcha="true" />
        <div className="button-wrapper">
          <button className="py-h px-1 mt-1" type="submit">
            Send It!
          </button>
        </div>
      </form>
    </div>
  );

  static renderOnlineSection = () => (
    <div className="online">
      <h3>Find Me Online!</h3>
      <div className="social-icons flex-row items-baseline">
        {Footer.renderLinks()}
      </div>
    </div>
  );

  static renderLinks = () =>
    _.map(
      links,
      (l: { href: string; icon: SocialIconType; platform: string }) => (
        <a
          key={l.href}
          className="link"
          href={l.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon iconKey={l.icon} />
          <span className="platform">{l.platform}</span>
        </a>
      )
    );

  render() {
    return (
      <FooterStyles>
        <div className="content-container">
          <div className="footer">
            {Footer.renderContactForm()}
            {Footer.renderOnlineSection()}
          </div>
        </div>
      </FooterStyles>
    );
  }
}
