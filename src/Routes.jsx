var React = require("react");
var ReactRouter = require("react-router"); // actual package provided to us
var Router = ReactRouter.Router;
var Route = ReactRouter.Route; // specific page

//get rid of hashing
var CreateHistory = require("history/lib/createHashHistory");
var History = new CreateHistory({
  queryKey: false
});

var Base = require("./components/Base.jsx");
var PageNews = require("./components/PageNews.jsx");
var PagePhotos = require("./components/PagePhotos.jsx");

var Routes = (
  <Router history={History}>
    <Route path="/" component={Base} >
      <Route path="/news" component={PageNews} />
      <Route path="/photos" component={PagePhotos} />
    </Route>
  </Router>
);

module.exports = Routes;
