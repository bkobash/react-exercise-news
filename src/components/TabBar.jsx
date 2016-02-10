var React = require("react");

var TabBar = React.createClass({

  render: function() {

    var selectedPath = this.props.selectedPath;
    var newsClassName = "mdl-layout__tab",
        photosClassName = "mdl-layout__tab";

    if (selectedPath === "/news") {
      newsClassName= "mdl-layout__tab is-active";
    }
    if (selectedPath === "/photos") {
      photosClassName= "mdl-layout__tab is-active";
    }

    return (
      <div className="mdl-layout__tab-bar-nojs mdl-layout__tab-bar mdl-js-ripple-effect mdl-color--primary-dark">
        <a href="/#news" className={newsClassName}>News</a>
        <a href="/#photos" className={photosClassName}>Photos</a>
      </div>
    );
  }
});

module.exports = TabBar;
