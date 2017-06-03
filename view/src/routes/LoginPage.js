import React from 'react';
import LoginForm from '../components/Login';
import styles from './LoginPage.css';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    console.log("LoginPage ==>");
  }

  render() {
    return (
      <LoginForm></LoginForm>
    );
  }
}

export default LoginPage;
