import React, { Component } from 'react';
import './pages.css';
import axios from 'axios';
import _ from 'lodash';

import { Redirect } from 'react-router'

 class Logout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fireRedirect: false,
    }
  }

    componentWillMount() {
      axios.get('/auth/logout')
      .then((response) => {
        this.setState({ fireRedirect: true })
      })
      .catch((error) => {
        alert(`Error logging out: \n${error}`);
      });
    }

  render() {
    const { fireRedirect } = this.state
    const { from } = this.props.location.state || '/'

    return (
      <div>{fireRedirect && (<Redirect to={from || '/login'}/>)}</div>
     );
  }
}
export default Logout;