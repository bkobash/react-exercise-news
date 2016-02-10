var React = require("react");
var ImageItem = require("./ImageItem.jsx");

var ImageList = React.createClass({
  render: function() {

    var createItem = function(image, index) {
      // "key" and "text" are the "props" in the ListItem component
      return <ImageItem key={index} image={image} />;
    }

    var imageListStyle = {
      marginTop: 24,
      marginBottom: 24
    };

    // this.props.items is an array
    // JavaScript ".map()" will iterate through an array and call that function
    // each time
    return (<div style={imageListStyle}>{this.props.items.map(createItem)}</div>)
  }
});

module.exports = ImageList;
