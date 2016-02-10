var React = require("react");

var PagePhotos = React.createClass({
  render: function() {

    var photoStyle = {
      backgroundColor: "red",
      height: 200
    }

    return (
      <div className="mdl-layout__tab-panel is-active">
        <section className="section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp">
          <div className="mdl-card mdl-cell mdl-cell--12-col">
            <div className="mdl-grid mdl-card__news-story">
              <div className="mdl-cell mdl-cell--3-col-desktop mdl-cell--12-col-phone" style={photoStyle}>adf</div>
              <div className="mdl-cell mdl-cell--3-col-desktop mdl-cell--12-col-phone"  style={photoStyle}>adf</div>
              <div className="mdl-cell mdl-cell--3-col-desktop mdl-cell--12-col-phone"  style={photoStyle}>adf</div>
              <div className="mdl-cell mdl-cell--3-col-desktop mdl-cell--12-col-phone"  style={photoStyle}>adf</div>
            </div>
          </div>
        </section>
      </div>
    )
  }
});

module.exports = PagePhotos;
