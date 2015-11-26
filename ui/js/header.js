var Bootstrap = require('react-bootstrap');
var React = require('react');


var Header = React.createClass({
  displayName: 'Header',
  getInitialState: function () {
    return {
      name: 'Name',
      logout: ''
    };
  },
  render: function () {
    var me = this;

    return (
      React.createElement(Bootstrap.Navbar, {inverse: true},
        React.createElement(Bootstrap.Navbar.Header, null,
          React.createElement(Bootstrap.Navbar.Brand, null, 'SY Games'),
          React.createElement(Bootstrap.Navbar.Toggle, null)
        ),
        React.createElement(Bootstrap.Navbar.Collapse, null,
          React.createElement(Bootstrap.Nav, {pullRight: true},
            React.createElement(Bootstrap.NavDropdown, {id: 'dropdown', title: me.state.name, eventKey: 1},
              React.createElement(Bootstrap.MenuItem, {href: me.state.logout, eventKey: 1.1}, 'Log Out')
            )
          )
        )
      )
    );
  }
});

module.exports = Header;
