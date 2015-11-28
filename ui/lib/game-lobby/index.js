var React = require('react');
var Bootstrap = require('react-bootstrap');

var GameLobby = React.createClass({
  displayName: 'GameLobby',
  getInitialState: function () {
    return {
      games: null
    };
  },
  createGame: function () {
    console.log('createGame');
  },
  fetchGameData: function () {
    var me = this;
    var currentGameType = me.props.location.pathname;

    if (currentGameType === '/') {
      return;
    }

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
      me.setState({
        games: []
      });
    });
  },
  componentDidMount: function () {
    var currentGameType = this.props.location.pathname.substring(1);
    if (currentGameType && currentGameType.length > 0) {
      this.fetchGameData();
    }
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
        React.createElement(Bootstrap.Button, {
          block: true,
          className: 'center-block',
          onClick: this.createGame,
          style: {width: '50%'}
        }, 'Create Game'),
        React.createElement('div', null, content)
      )
    );
  }
});

module.exports = GameLobby;
