import React, { Component } from 'react';
import Header from '../Components/Header';

class Profile extends Component {
  render() {
    return (
      <div data-testid="page-profile">
        <Header />
        <p>Profile</p>
      </div>
    );
  }
}
export default Profile;
