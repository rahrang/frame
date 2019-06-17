import * as React from 'react';
import { Link } from 'gatsby';

import ExternalLinkButton from '../ExternalLinkButton';

export const internalLink = (to: string, text: React.ReactNode) => (
  <Link className="navlink" to={to} activeClassName="navlink--active">
    {text}
  </Link>
);

export const externalLink = (href: string, text: React.ReactNode) => (
  <a className="navlink" href={href}>
    {text}
  </a>
);

export const internalHeadline = () => (
  <Link className="headline navlink" to="/">
    <h1>Rahul Rangnekar</h1>
  </Link>
);

export const externalHeadline = () => (
  <a className="headline" href="https://rahulrangnekar.com">
    <h1>Rahul Rangnekar</h1>
  </a>
);

export const resumeButton = () => (
  <ExternalLinkButton
    href="https://rahulrangnekar.com/resume"
    target="_blank"
    rel="noopener noreferrer"
  >
    Resume
  </ExternalLinkButton>
);
