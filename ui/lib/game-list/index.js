var React = require('react');

var GameList = React.createClass({
  displayName: 'GameList',
  getInitialState: function () {
    return {
      games: null
    };
  },
  fetchGameData: function () {
    var me = this;
    console.log(me.props.location.pathname);

    fetch('/api/v1/status', {
      credentials: 'include'
    })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      me.setState({
        games: [
          {},
          {},
          {}
        ]
      });
    })
    .catch(function (error) {
      console.error(error);
    });
  },
  componentDidMount: function () {
    this.fetchGameData();
  },
  render: function () {
    var content;
    if (!this.state.games) {
      content = React.createElement('img', {src: './images/loading.gif'});
    } else {
      var games = this.state.games.map(function (game) {
        return (
          React.createElement('li', null, 'nothing')
        );
      });

      content = React.createElement('ul', null, games);
    }

    return (
      React.createElement('div', null,
        React.createElement('h1', null, 'Game List'),
        React.createElement('div', null, content)
      )
    );
  }
});

module.exports = GameList;
