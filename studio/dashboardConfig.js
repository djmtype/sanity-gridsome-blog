export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
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
                  buildHookId: '5f281510b4b5b70baff8d597',
                  title: 'Sanity Studio',
                  name: '',
                  apiId: 'a471d314-2963-4a09-965f-7ed553df1c7b'
                },
                {
                  buildHookId: '5f281510eba2c170717cb9e2',
                  title: 'Blog Website',
                  name: '',
                  apiId: '1c80554d-7790-4fdb-b49d-58712cbc8814'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/djmtype/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: '', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
