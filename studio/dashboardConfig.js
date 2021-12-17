export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61bcbc66b1a18d0dc4bf93cd',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-v-2-studio',
                  apiId: 'a2de6d0a-6627-4cda-9764-55e29ecf9034'
                },
                {
                  buildHookId: '61bcbc6627550d008c36ba5e',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-v-2',
                  apiId: '88355c14-97e9-47fc-b2d2-25ff7b794300'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Bobthebc/sanity-gatsby-portfolio_V2',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-v-2.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
