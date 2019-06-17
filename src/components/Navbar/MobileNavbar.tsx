import * as React from 'react';

import * as render from './render';
import Icon from '../Icon';

export default class MobileNavbar extends React.Component<
  {
    from: 'blog' | 'website';
  },
  {
    isOpen: boolean;
  }
> {
  state = {
    isOpen: false,
  };

  static renderBlogMobileNavbar = () => (
    <React.Fragment>
      {render.externalLink('https://rahulrangnekar.com/about', 'About')}
      {render.externalLink('https://rahulrangnekar.com/projects', 'Projects')}
      {render.internalLink('/blog', 'Blog')}
      {render.resumeButton('mobile')}
    </React.Fragment>
  );

  static renderWebsiteMobileNavbar = () => (
    <React.Fragment>
      {render.internalLink('/about', 'About')}
      {render.internalLink('/projects', 'Projects')}
      {render.externalLink('https://blog.rahulrangnekar.com', 'Blog')}
      {render.resumeButton('mobile')}
    </React.Fragment>
  );

  toggle = () => {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  };

  close = () => {
    this.setState({ isOpen: false });
  };

  render() {
    const { isOpen } = this.state;
    const { from } = this.props;

    return (
      <div className="mobile">
        <button className="hamburger" onClick={this.toggle}>
          <Icon iconKey="hamburger" />
        </button>
        {isOpen && (
          <div className="mobile-navbar" onClick={this.close}>
            <div className="content flex-col">
              {from === 'website'
                ? MobileNavbar.renderWebsiteMobileNavbar()
                : MobileNavbar.renderBlogMobileNavbar()}
            </div>
          </div>
        )}
      </div>
    );
  }
}
