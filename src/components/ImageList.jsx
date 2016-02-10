var React = require("react");
var ImageItem = require("./ImageItem.jsx");

var ImageList = React.createClass({

  propTypes: {
    images: React.PropTypes.array
  },

  getDefaultProps: function() {
    return {
      images: []
    }
  },

  render: function() {

    var createItem = function(image, index) {
      return <ImageItem key={index} image={image} />;
    }

    var imageListStyle = {
      marginTop: 24,
      marginBottom: 24
    };

    return (<div style={imageListStyle}>{this.props.images.map(createItem)}</div>)
  }
});

module.exports = ImageList;
