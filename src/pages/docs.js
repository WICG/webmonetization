// Redirects /docs to /docs/getting-started

const React = require('react')
const { Redirect } = require('@docusaurus/router')

export default class Docs extends React.Component {
  render () {
    const { siteConfig } = this.props

    return (
      <Redirect
        to={'/docs/getting-started'}
        config={siteConfig}
      />
    )
  }
}
