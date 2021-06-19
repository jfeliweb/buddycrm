import React, { Component } from 'react';
import TextInputGroup from '../layout/TextInputGroup';
import { Box, Button, Form, Heading } from 'react-bulma-components';
import { Consumer } from '../../context';
import axios from 'axios';

class AddContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    errors: {}
  }
  onSubmit = async (dispatch, e) => {
    e.preventDefault();

    const { name, email, phone } = this.state;

    // Check for errors in fields
    if (name === '') {
      this.setState({errors: {name: 'Name is required'}});
      return;
    }
    if (email === '') {
      this.setState({errors: {email: 'Email is required'}});
      return;
    }
    if (phone === '') {
      this.setState({errors: {phone: 'Phone is required'}});
      return;
    }

    const newContact = {
      name,
      email,
      phone
    }

    const res = await axios.post(`https://jsonplaceholder.typicode.com/users`, newContact);

    dispatch({ type: 'ADD_CONTACT', payload: res.data })

    // Clear state
    this.setState({
      name: '',
      email: '',
      phone: '',
      errors: {}
    })

    this.props.history.push('/');

  }
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });
  render() {
    const { name, email, phone, errors } = this.state;

    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <Box>
              <Heading>
                Add Contact
              </Heading>
              <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                <TextInputGroup 
                  label='Name'
                  placeholder='John Jacob Doe'
                  name='name'
                  value={name}
                  onChange={this.onChange}
                  error={errors.name}
                />
                <TextInputGroup
                  type='email' 
                  label='Email'
                  placeholder='jjd54@email.com'
                  name='email'
                  value={email}
                  onChange={this.onChange}
                  error={errors.email}
                />
                <TextInputGroup 
                  label='Phone'
                  placeholder='555-555-5555'
                  name='phone'
                  value={phone}
                  onChange={this.onChange}
                  error={errors.phone}
                />
                <Form.Field>
                  <Form.Control>
                    <Button fullwidth submit colorVariant='light' color='primary' size='large'>Add Contact</Button>
                  </Form.Control>
                </Form.Field>
              </form>
            </Box>
          )
        }}
      </Consumer>
    )
  }
}

export default AddContact;