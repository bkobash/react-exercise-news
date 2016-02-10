var React = require("react");

var PhotoItem = require("./PhotoItem.jsx");

var PagePhotos = React.createClass({
  render: function() {

    var photos = [
      "images/photo1.jpg",
      "images/photo2.jpg",
      "images/photo3.jpg",
      "images/photo4.jpg",
      "images/photo5.jpg",
      "images/photo6.jpg",
      "images/photo7.jpg",
      "images/photo8.jpg",
    ];

    var createItem = function(photo, index) {
      return <PhotoItem key={index} photo={photo} />;
    }

    return (
      <div className="mdl-layout__tab-panel is-active">
        <section className="section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp">
          <div className="mdl-card mdl-cell mdl-cell--12-col">
            <div className="mdl-grid mdl-card__news-story">
              {photos.map(createItem)}
            </div>
          </div>
        </section>
      </div>
    )
  }
});

module.exports = PagePhotos;
