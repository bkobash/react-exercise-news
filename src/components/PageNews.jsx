var React = require("react");
var StoryList = require("./StoryList.jsx");

var PageNews = React.createClass({
  render: function() {

    var items = [
      {
        header: "Supreme Court blocks Obama carbon emissions plan",
        description: "WASHINGTON The U.S. Supreme Court on Tuesday delivered a major blow to President Barack Obama by putting on hold federal regulations to curb carbon dioxide emissions mainly from coal-fired power plants, the centerpiece of his administration's ...",
        citation: "Reuters	 - ‎4 hours ago",
        icon: "images/source-reuters.png",
        images: ["images/news-reuters-smokestack.jpg", "images/news-reuters-obama.jpg"]
      },
      {
        header: "DOJ threatens legal action against Ferguson",
        description: "FERGUSON, Mo. - The Justice Department said on Wednesday that it is exploring &quot;legal actions&quot; against the city of Ferguson, just hours after the city council in the St. Louis suburb called for the revision of several aspects of a tentative agreement ...",
        citation: "USA TODAY	 - ‎1 hour ago‎",
        icon: "images/source-usatoday.png",
        images: ["images/news-usatoday-ferguson.jpg", "images/news-usatoday-police.jpg"]
      },
      {
        header: "Stephen Curry's 35 points lift Warriors to 42nd straight home win",
        description: "OAKLAND, Calif. -- Stephen Curry had 35 points, nine assists and six rebounds and the Golden State Warriors relied on a signature putaway fourth quarter to hold off the Houston Rockets 123-110 on Tuesday night.",
        citation: "ESPN	 - ‎3 hours ago‎",
        icon: "images/source-espn.png",
        images: ["images/news-espn-warriors.jpg"]
      },
      {
        header: "Developers of Toppled Taiwan Building Detained",
        description: "TAINAN, Taiwan - Three Taiwanese construction company executives have been detained on charges of professional negligence resulting in death following the collapse of an apartment building that killed dozens.",
        citation: "New York Times	 - ‎4 hours ago‎",
        icon: "images/source-nytimes.png",
        images: ["images/news-nytimes-taiwan.jpg"]
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
