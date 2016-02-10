var React = require("react");

var TabBar = React.createClass({

  render: function() {

    var selectedPath = this.props.selectedPath;
    var newsClassName = "", photosClassName = "";

    if (selectedPath === "/news") {
      newsClassName = "is-active";
    }
    if (selectedPath === "/photos") {
      photosClassName= "is-active";
    }

    return (
      <div className="mdl-layout__tab-bar-nojs mdl-layout__tab-bar mdl-js-ripple-effect mdl-color--primary-dark">
        <a href="/#news" className={"mdl-layout__tab " + newsClassName}>News</a>
        <a href="/#photos" className={"mdl-layout__tab " + photosClassName}>Photos</a>
      </div>
    );
  }
});

module.exports = TabBar;
