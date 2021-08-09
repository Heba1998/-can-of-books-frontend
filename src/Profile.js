import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Content from './content';

class Profile extends Component {
  render() {

    const { user, isAuthenticated } = this.props.auth0;
    return (
      isAuthenticated &&
      <div>
            <Card style={{ width: '18rem' , height:'500px' }}>
        <Card.Body>
        <Card.Img variant="top" src={user.picture} alt={user.name} />
        <br/>
          <Card.Title>{user.name}</Card.Title>
          <Card.Text>
          {user.email}
          </Card.Text>
          <Content />
        </Card.Body>
      </Card>
      </div>
    );
  }
}

export default withAuth0(Profile);