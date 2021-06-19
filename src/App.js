import React, { Component } from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/layout/Header'
import About from './components/pages/About'
import Contacts from './components/contacts/Contacts'
import AddContact from './components/contacts/AddContact'
import EditContact from './components/contacts/EditContact'
import NotFound from './components/pages/NotFound'
import {Provider} from './context'
import 'bulma'
import './App.sass';
import { Container, Section } from 'react-bulma-components';

class App extends Component {
render() {
  return (
    <Provider>
      <Router>
        <div className="App">
        <Header branding="Buddy CRM" />
        <Section size="medium">
          <Container>
            <Switch>
              <Route exact path="/" component={Contacts} />
              <Route exact path="/contact/add" component={AddContact} />
              <Route exact path="/contact/edit/:id" component={EditContact} />
              <Route exact path="/about" component={About} />
              <Route component={NotFound} />
            </Switch>
          </Container>
        </Section>
      </div>
      </Router>
    </Provider>
  );
}
}

export default App;
