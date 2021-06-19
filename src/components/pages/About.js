import React from 'react'
import { Container, Content, Heading, Section } from 'react-bulma-components'

const About = () => {
  return (
    <Section>
      <Container>
        <Heading size='1'>About Buddy CRM</Heading>
        <Content>
          <p>Simple app to manage your buddies.</p>
          <p>Version 1.0.0</p>
        </Content>
      </Container>
    </Section>
  )
}

export default About;
