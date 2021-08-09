import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './BestBooks.css';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel'

class MyFavoriteBooks extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }
  componentDidMount = () => {
    const userEmail = this.props.auth0.user.email;
    axios.get(`${process.env.REACT_APP_SERVER}/books?email=${userEmail}`).then((axiosResponse) => {
      console.log(axiosResponse.data);
      this.setState({
        books: axiosResponse.data
      })
    }).catch(error => alert(error))
  }
  render() {
    return (
      <Jumbotron>
        <h1>My Favorite Books 📖</h1>
        <p>
          This is a collection of my favorite books
        </p>

        {
          this.state.books.length &&
          <div>
            {
              this.state.books.map(book => {
                <Carousel>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src="holder.js/800x400?text=First slide&bg=373940"
                      alt="First slide"
                    />
                    <Carousel.Caption>
                      <h3>{book.title}</h3>
                      <p>{book.description}</p>
                      <p>{book.author}</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
              })
            }
          </div>
        }

      </Jumbotron>
    )
  };
}

export default withAuth0(MyFavoriteBooks);
