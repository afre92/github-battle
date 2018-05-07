var React = require('react');
var Popular = require('./Popular');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;
var Nav = require('./Nav');
var Home = require('./Home');
var Battle = require('./Battle');
var Results = require('./Results');


class App extends React.Component {
  render() { // whatever this returns it will be the UI
    return (
      <Router>
        <div className='container'>
        <Nav />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/popular' component={Popular}  />
            <Route path='/battle/results' component={Results} />
            <Route exact path='/battle' component={Battle} />
            <Route render={function(){
              return <p> Not Found </p>
            }} />
          </Switch>
        </div>
      </Router>

    )
  }
}

// export from here to whatever is calling it
module.exports = App;