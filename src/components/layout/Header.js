import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Heading, Navbar } from 'react-bulma-components'

const Header = (props) => {
  const { branding } = props;
  return (
    <Navbar fixed="top" color="dark" py="0" mb="3" >
      <Navbar.Brand>
        <Navbar.Item href="/">
          <Heading size={1} >
            {branding}
          </Heading>
        </Navbar.Item>
        <Navbar.Burger />
      </Navbar.Brand>
      <Navbar.Menu>
        <Navbar.Container align="right" >
          <Navbar.Item>
            <Link to="/">
              <i className="fas fa-home"></i> Home
            </Link>
          </Navbar.Item>
          <Navbar.Item>
            <Link to="/contact/add">
              <i className="fas fa-plus"></i> Add
            </Link>
          </Navbar.Item>
          <Navbar.Item>
            <Link to="/about">
              <i className="fas fa-question"></i> About
            </Link>
          </Navbar.Item>
        </Navbar.Container>
      </Navbar.Menu>
    </Navbar>
  )
}

Header.defaultProps = {
  branding: 'My App'
}

Header.propTypes = {
  branding: PropTypes.string.isRequired
}

export default Header;