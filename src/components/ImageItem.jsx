var React = require("react");

var ImageItem = React.createClass({

  render: function() {

    var imageItemStyle = {
        width: 200,
        height: 120
    };

    return (
      <img src={this.props.image} style={imageItemStyle} />
    );
  }
});

module.exports = ImageItem;
