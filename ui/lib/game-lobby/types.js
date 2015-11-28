var React = require('react');
var Link = require('react-router').Link;

var Types = React.createClass({
  displayName: 'GameTypes',
  render: function () {
    return (
      React.createElement('div', null,
        React.createElement('h1', null, 'Squirtle Yakuza Games'),
        React.createElement('h2', null, 'Available Game Types'),
        React.createElement('ul', null,
          React.createElement('li', null,
            React.createElement(Link, {to: '/tripletriad'}, 'Triple Triad')
          )
        )
      )
    );
  }
});

module.exports = Types;
