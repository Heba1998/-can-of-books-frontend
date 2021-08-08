import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import './Login.css';
//
import LoginButton from './LoginButton';
//

class Login extends React.Component {
  render() {
    return(
      <Card style={{ width: '18rem' , height:'500px' }}>
        <Card.Body>
        <Card.Img variant="top" src="https://st.depositphotos.com/2036511/4057/v/600/depositphotos_40575113-stock-illustration-login-button.jpg" />
         <br/>
          <Card.Title>Log In</Card.Title>
          <Card.Text>
            Click Below to Log In
          </Card.Text>
          {/* TODO: add a `LoginButton` component here that will log the user in with Auth0 */}
        <LoginButton/>
        </Card.Body>
      </Card>
    )
  }
}

export default Login;
