var React = require('react');
var ReactDOM = require('react-dom');
var Header = require('./header');

var Main = React.createClass({
  displayName: 'Main',
  render: function () {
    return (
      React.createElement('div', null,
        React.createElement('nav', null,
          React.createElement(Header, null)
        ),
        React.createElement('div', null,
          React.createElement('h1', null, 'Game List')
        )
      )
    );
  }
});

ReactDOM.render(
  React.createElement(Main),
  document.getElementById('content')
);
