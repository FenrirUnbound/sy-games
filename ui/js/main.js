var GameLobby = require('../lib/game-lobby');
var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router');
var Types = require('../lib/game-lobby/types');
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
            React.createElement(Router.Route, {path: '/', component: Types}),
            React.createElement(Router.Route, {component: GameLobby},
              React.createElement(Router.Route, {path: '/tripletriad'})
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
