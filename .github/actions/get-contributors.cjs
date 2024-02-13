const { Octokit } = require('@octokit/action')
const fs = require('fs')

const octokit = new Octokit()

async function getContributors() {
  const { data } = await octokit.request(
    'GET /repos/wicg/webmonetization/collaborators',
    {
      owner: 'wicg',
      repo: 'webmonetization',
      headers: {
        'X-GitHub-Api-Version': '2022-11-28',
      },
    },
  )
  const contributors = JSON.stringify(data)
  fs.writeFileSync('src/data/contributors.json', contributors)
}

getContributors()
