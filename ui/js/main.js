var GameLobby = require('../lib/game-lobby');
var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router');
var Header = require('../lib/header');
var history = require('history/lib/createBrowserHistory')();

var Main = React.createClass({
  displayName: 'Main',
  render: function () {
    return (
      React.createElement('div', null,
        React.createElement('nav', null,
          React.createElement(Header, null)
        ),
        React.createElement('div', null,
          React.createElement(Router.Router, {history: history},
            React.createElement(Router.Route, {component: GameLobby},
              React.createElement(Router.Route, {path: '/tripletriad'}),
              React.createElement(Router.Route, {path: '/'})
            )
          )
        )
      )
    );
  }
});

ReactDOM.render(
  React.createElement(Main),
  document.getElementById('content')
);
