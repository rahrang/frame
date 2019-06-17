import * as React from 'react';

import NavbarStyles from './styles';
import MobileNavbar from './MobileNavbar';
import * as render from './render';

export default class Navbar extends React.Component<{
  from: 'blog' | 'website';
}> {
  static renderBlogNavbar = () => (
    <div className="navbar flex-row items-end content-between">
      <div className="navbar-section">
        {render.externalLink('https://rahulrangnekar.com/about', 'About')}
        {render.externalLink('https://rahulrangnekar.com/projects', 'Projects')}
      </div>
      {render.externalHeadline()}
      <div className="navbar-section">
        {render.internalLink('/blog', 'Blog')}
        {render.resumeButton()}
      </div>
    </div>
  );

  static renderWebsiteNavbar = () => (
    <div className="navbar flex-row items-end content-between">
      <div className="navbar-section">
        {render.internalLink('/about', 'About')}
        {render.internalLink('/projects', 'Projects')}
      </div>
      {render.internalHeadline()}
      <div className="navbar-section">
        {render.externalLink('https://blog.rahulrangnekar.com', 'Blog')}
        {render.resumeButton()}
      </div>
    </div>
  );

  render() {
    const { from } = this.props;

    return (
      <NavbarStyles>
        <div className="content-container">
          {from === 'website'
            ? Navbar.renderWebsiteNavbar()
            : Navbar.renderBlogNavbar()}
          <div className="mobile-only flex-row items-end">
            <MobileNavbar from={from} />
            {render.internalHeadline()}
          </div>
        </div>
      </NavbarStyles>
    );
  }
}
