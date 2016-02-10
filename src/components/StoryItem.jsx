var React = require("react");
var ImageList = require("./ImageList.jsx");

var StoryItem = React.createClass({

  render: function() {

    var headerStyle = {
      marginTop: 0,
      marginBottom: 8
    };
    var citeStyle = {
      fontStyle: "normal",
      fontSize: "12px",
      fontWeight: "bold",
      color: "#dddddd"
    };
    var iconStyle = {
      width: 48,
      height: 48
    }

    return (
      <section className="section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp">
        <div className="mdl-card mdl-cell mdl-cell--12-col">
          <div className="mdl-card__news-story mdl-grid mdl-grid--no-spacing">
            <div className="mdl-cell mdl-cell--2-col mdl-cell--1-col-phone">
              <img src={this.props.icon} style={iconStyle} />
            </div>
            <div className="mdl-cell mdl-cell--10-col-desktop mdl-cell--6-col-tablet mdl-cell--3-col-phone">
              <h4 style={headerStyle}>{this.props.header}</h4>
              <p>{this.props.description}</p>
              <ImageList images={this.props.images} />
              <cite style={citeStyle}>{this.props.citation}</cite>
            </div>
          </div>
        </div>
      </section>
    );

  }

});

module.exports = StoryItem;
