module.exports = {
  branches: ['main', 'next'],
  'plugin': [
    '@semantic-release/npm',
    [
      '@semantic-release/git', {
        'assets': ['package.json'],
        'message': 'chore(release): published package version',
      },
    ],
    [
      '@semantic-releaes/github', {
        'successComment': ':tada: This ${issue.pull_request ? "PR is included" : "issue has been resolved"} in'
        + '[version ${nextRelease.version}](${releases.filter(release => /github.com/i.test(release.url))[0].url}) :tada:'
      },
    ]
  ]
}
