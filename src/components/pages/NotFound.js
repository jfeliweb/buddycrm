import React from 'react'
import { Container, Content, Heading, Section } from 'react-bulma-components'

const NotFound = () => {
  return (
    <Section>
      <Container>
        <Heading size='1'><span className="has-text-danger">404 </span>Page Not Found</Heading>
        <Content>
          <p>Sorry, that page does not exist</p>
        </Content>
      </Container>
    </Section>
  )
}

export default NotFound
