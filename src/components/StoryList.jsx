var React = require("react");
var StoryItem = require("./StoryItem.jsx");

var StoryList = React.createClass({

  propTypes: {
    item: React.PropTypes.object.isRequired
  },

  getDefaultProps: function() {
    return {
      item: {}
    }
  },

  render: function() {

    var createItem = function(item, index) {
      var header = item.header || "Headline",
          description = item.description || "Lorem ipsum",
          citation = item.citation || "San Francisco, CA",
          images = item.images || [],
          icon = item.icon || "images/blank.gif";
      return <StoryItem key={index} header={header} description={description} citation={citation} images={images} icon={icon} />;
    }

    return (<div>{this.props.items.map(createItem)}</div>)

  }
});

module.exports = StoryList;
