var React = require("react");

var TabBar = require("./TabBar.jsx");

var Base = React.createClass({


  render: function() {

    // need an extra DIV to wrap this, because .mdl-js-layout does a bunch of
    // DOM manipulation that conflicts with React.
    return (
      <div>
        <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
          <header className="mdl-layout__header mdl-layout__header--scroll mdl-color--primary">
            <div className="mdl-layout--large-screen-only mdl-layout__header-row">
            </div>
            <div className="mdl-layout--large-screen-only mdl-layout__header-row">
              <h3>Country News</h3>
              <ul className="mdl-layout__header-social-icons">
                <li><i className="material-icons" role="presentation">face</i></li>
                <li><i className="material-icons" role="presentation">school</i></li>
                <li><i className="material-icons" role="presentation">camera_alt</i></li>
                <li><i className="material-icons" role="presentation">work</i></li>
                <li><i className="material-icons" role="presentation">email</i></li>
              </ul>
            </div>
            <div className="mdl-layout--large-screen-only mdl-layout__header-row">
              <h6>Top stories in my country</h6>
            </div>
            <div className="mdl-layout--large-screen-only mdl-layout__header-row mdl-layout__header-row-bottom">
            </div>
            <TabBar selectedPath={this.props.children.props.location.pathname} />
          </header>
          <main className="mdl-layout__content">
            {this.props.children}
            <footer className="mdl-mega-footer">
              <div className="mdl-mega-footer--middle-section">
                <div className="mdl-mega-footer--drop-down-section">
                  {/*<input className="mdl-mega-footer--heading-checkbox" type="checkbox" checked />*/}
                  <h1 className="mdl-mega-footer--heading">Features</h1>
                  <ul className="mdl-mega-footer--link-list">
                    <li><a href="#">About</a></li>
                    <li><a href="#">Terms</a></li>
                    <li><a href="#">Partners</a></li>
                    <li><a href="#">Updates</a></li>
                  </ul>
                </div>
                <div className="mdl-mega-footer--drop-down-section">
                  {/*<input className="mdl-mega-footer--heading-checkbox" type="checkbox" checked />*/}
                  <h1 className="mdl-mega-footer--heading">Details</h1>
                  <ul className="mdl-mega-footer--link-list">
                    <li><a href="#">Spec</a></li>
                    <li><a href="#">Tools</a></li>
                    <li><a href="#">Resources</a></li>
                  </ul>
                </div>
                <div className="mdl-mega-footer--drop-down-section">
                  {/*<input className="mdl-mega-footer--heading-checkbox" type="checkbox" checked />*/}
                  <h1 className="mdl-mega-footer--heading">Technology</h1>
                  <ul className="mdl-mega-footer--link-list">
                    <li><a href="#">How it works</a></li>
                    <li><a href="#">Patterns</a></li>
                    <li><a href="#">Usage</a></li>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">Contracts</a></li>
                  </ul>
                </div>
                <div className="mdl-mega-footer--drop-down-section">
                  {/*<input className="mdl-mega-footer--heading-checkbox" type="checkbox" checked />*/}
                  <h1 className="mdl-mega-footer--heading">FAQ</h1>
                  <ul className="mdl-mega-footer--link-list">
                    <li><a href="#">Questions</a></li>
                    <li><a href="#">Answers</a></li>
                    <li><a href="#">Contact us</a></li>
                  </ul>
                </div>
              </div>
              <div className="mdl-mega-footer--bottom-section">
                <div className="mdl-logo">
                  More Information
                </div>
                <ul className="mdl-mega-footer--link-list">
                  <li><a href="https://developers.google.com/web/starter-kit/">Web Starter Kit</a></li>
                  <li><a href="#">Help</a></li>
                  <li><a href="#">Privacy and Terms</a></li>
                </ul>
              </div>
            </footer>
          </main>
        </div>
      </div>
    );
  }

});

module.exports = Base;
