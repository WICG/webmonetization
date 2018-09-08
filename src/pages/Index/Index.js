import React from 'react'
import Grid from '@material-ui/core/Grid'
import withRoot from '../../withRoot'
import Container from '../../components/Container'
import Section, { Heading, Content } from '../../components/Section'
import List, { ListItem } from '../../components/List'
import Paragraph from '../../components/Paragraph'
import Logo from './Logo'
import ProjectStatus from './ProjectStatus'
import MainDescription from './MainDescription'

class Index extends React.Component {
  render () {
    return (
      <Container>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Logo />
          </Grid>
          <Grid item xs={12}>
            <MainDescription />
          </Grid>
          <Grid item xs={12}>
            <ProjectStatus />
          </Grid>
          <Grid item xs={12}>
            <Section>
              <Heading>Motivation</Heading>
              <Content>
                <Paragraph>
                  The ability to transfer money has been a long-standing omission from the web platform. As a result, the web suffers from a flood of advertising and corrupt business models. Web Monetization provides an open, native, efficient, and automatic way to compensate creators, pay for API calls, and support crucial web infrastructure.
                </Paragraph>
              </Content>
            </Section>
          </Grid>
          <Grid item xs={12}>
            <Section>
              <Heading>Why now?</Heading>
              <Content>
                <Paragraph>
                  Until recently, there hasn't been an open, neutral protocol for transferring money. <a href="https://interledger.org">Interledger</a> provides a simple, ledger-agnostic, and currency-agnostic method for the transfer of small quantities of money. This opens up the possibility for streaming money, which makes Web Monetization possible for the first time.
                </Paragraph>
              </Content>
            </Section>
          </Grid>
          <Grid item xs={12}>
            <Section>
              <Heading>Specification</Heading>
              <Content>
                <a href="https://interledger.org/rfcs/0028-web-monetization/">IL-RFC 28: Web Monetization</a>
              </Content>
            </Section>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Section>
              <Heading>For Users</Heading>
              <Content>
                <Paragraph>
                  Here are some providers offering Web Monetization Services today:
                </Paragraph>
                <List>
                  <ListItem><a href="https://coil.com">Coil</a></ListItem>
                  <ListItem>Do you know another provider? <a href="https://github.com/interledger/webmonetization.org/edit/master/src/pages/Index/Index.js">Make a PR</a></ListItem>
                </List>
              </Content>
            </Section>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Section>
              <Heading>For Creators</Heading>
              <Content>
                <Paragraph>
                  Instructions for adding Web Monetization to your site are coming soon!
                </Paragraph>
              </Content>
            </Section>
          </Grid>
        </Grid>
      </Container>
    )
  }
}

export default withRoot(Index)
