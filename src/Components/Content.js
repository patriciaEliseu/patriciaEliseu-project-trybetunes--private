import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../pages/Login';
import Search from '../pages/Search';
import Album from '../pages/Album';
import Favorites from '../pages/Favorites';
import Profile from '../pages/Profile';
import ProfileEdit from '../pages/ProfileEdit';
import NotFound from '../pages/NotFound';

class Content extends Component {
  render() {
    return (
      <div>
        <p>Content</p>
        <Switch>
          <Route
            path="/"
            component={ Login }
            exact
          />
          <Route
            path="/search"
            component={ Search }
            exact
          />
          <Route
            path="/album/:id"
            component={ Album }
            exact
          />
          <Route
            path="/favorites"
            component={ Favorites }
            exact
          />
          <Route
            path="/profile"
            component={ Profile }
            exact
          />
          <Route
            path="/profile/edit"
            component={ ProfileEdit }
            exact
          />
          <Route
            path="*"
            component={ NotFound }
          />
        </Switch>
      </div>
    );
  }
}
export default Content;
