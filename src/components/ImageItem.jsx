var React = require("react");

var ImageItem = React.createClass({

  render: function() {

    var imageItemStyle = {
        display: "inline-block",
        backgroundImage: "url(" + this.props.image + ")",
        backgroundSize: "cover",
        backgroundPosition: "50% 50%",
        width: 200,
        height: 120,
        marginRight: 8,
        marginBottom: 8
    };

    return (
      <div style={imageItemStyle} ></div>
    );
  }
});

module.exports = ImageItem;
