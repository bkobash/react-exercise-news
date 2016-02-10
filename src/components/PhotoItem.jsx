var React = require("react");

var PhotoItem = React.createClass({


  render: function() {

    var photoStyle = {
      backgroundColor: "#eeeeee",
      backgroundImage: "url(" + this.props.photo + ")",
      backgroundSize: "cover",
      backgroundPosition: "50% 50%",
      height: 200
    }

    return (
      <div className="mdl-cell mdl-cell--3-col-desktop mdl-cell--12-col-phone" style={photoStyle}></div>
    );
  }

});

module.exports = PhotoItem;
