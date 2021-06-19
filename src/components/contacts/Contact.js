import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Box, Card, Heading } from 'react-bulma-components';
import {Consumer} from '../../context'
import axios from 'axios';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

class Contact extends Component {
  static propTypes = {
    contact: PropTypes.object.isRequired
  }
  state = {
    showContactInfo: false
  }
  onShowClick = (e) => {
    this.setState({ showContactInfo: !this.state.showContactInfo })
  }
  onDeleteClick = async (id, dispatch) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      dispatch({type: 'DELETE_CONTACT', payload: id});
    } catch (e) {
      dispatch({type: 'DELETE_CONTACT', payload: id});
    }
    

    
  }
  render() {
    const { id, name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;

    return (
      <Consumer>
        {value => {
          const {dispatch} = value;
          return(
            <Card mb="3">
              <Card.Content>
                <Heading size={4}>{name} <i onClick={this.onShowClick} className="fas fa-chevron-down" /> 
                <i onClick={this.onDeleteClick.bind(this, id, dispatch)} className="fas fa-times"></i>
                <Link to={`contact/edit/${id}`}><i className="fas fa-pencil-alt"></i> </Link> 
                </Heading>
                {showContactInfo ? (
                <Box>
                  <ul>
                    <li>Email: {email}</li>
                    <li>Phone: {phone}</li>
                  </ul>
                </Box>
                ) : null}
                
              </Card.Content>
            </Card>
          )
        }}
      </Consumer>
    )
  }
}

export default Contact;