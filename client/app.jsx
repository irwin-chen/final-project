import React from 'react';
import UserCardList from './pages/user-card-list';
import Header from './components/header';
import Profile from './pages/profile';

function parseRoute(hashedRoute) {
  let route;
  if (hashedRoute.startsWith('#')) {
    route = hashedRoute.slice(1);
  }
  if (route.startsWith('profile')) {
    route = route.split('%');
  }
  return route;
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: null,
      route: null,
      profileId: null
    };
  }

  componentDidMount() {
    if (!this.state.route) {
      fetch('/api/users')
        .then(response => response.json())
        .then(data => {
          const list = data;
          this.setState({
            userList: list,
            route: ''
          });
        });
    }

    window.addEventListener('hashchange', () => {
      const [path, targetId] = parseRoute(window.location.hash);
      this.setState({
        route: path,
        profileId: targetId
      });
      fetch(`api/users/${this.state.profileId}`)
        .then(response => response.json())
        .then(data => {
          const list = data;
          this.setState({
            userList: list
          });
        });
    });
  }

  render() {
    if (this.state.route === '') {
      return (
        <div className="body font-mono bg-slate-50">
          <Header />
          <UserCardList userList={this.state.userList} />
        </div>
      );
    } else if (this.state.route === 'profile') {
      return (
        <div className="body font-mono bg-slate-50">
          <Header />
          <Profile targetProfile={this.state.userList}/>
        </div>
      );
    }

  }
}
