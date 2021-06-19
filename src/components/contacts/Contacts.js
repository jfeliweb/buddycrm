import React, { Component } from 'react'
import Contact from './Contact'
import {Consumer} from '../../context'
import { Heading } from 'react-bulma-components';

class Contacts extends Component {

  render() {
    return (
      <Consumer>
        {value => {
          const { contacts } = value;
          return (
            <React.Fragment>
              <Heading size='1'><span className="has-text-primary">Buddy</span> List</Heading>
              {contacts.map(contact => 
              <Contact key={contact.id} contact={contact} />  
              )}
            </React.Fragment>
          )
        }}
      </Consumer>
    )
  }
}

export default Contacts;