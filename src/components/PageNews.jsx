var React = require("react");
var StoryList = require("./StoryList.jsx");

var PageNews = React.createClass({
  render: function() {

    var items = [
      {
        header: "Obesity in America",
        subheader: "Why are Americans so fat?",
        description: "Us Americans are fat. On every corner there is a McDonalds or KFC. Michelle Obama wants Americans to become Vegan. Civil war and unrest have sprung up due to this debate...",
        citation: "Kentucky, USA",
        icon: "asdf",
        images: ["adsfvxzc", "adsfzvxc", "234dfs"]
      },
      {
        header: "asdzcvf",
        subheader: "adsfvcxz",
        description: "adsfzvcxzcv",
        citation: "adfcvz",
        icon: "adfzxcv",
        images: ["adsfvxzc", "adsfzvxc", "234dfs"]
      }

    ];

    return (
      <div className="mdl-layout__tab-panel is-active">
        <StoryList items={items} />
      </div>
    );
  }
});

module.exports = PageNews;
