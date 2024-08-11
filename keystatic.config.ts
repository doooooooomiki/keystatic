import { config, fields, collection, singleton } from '@keystatic/core';

export default config({
  storage: {
    kind: 'github',
    repo: {
      owner: 'doooooooomiki',
      name: 'keystatic',
    },
  },
  collections: {
    posts: collection({
      label: 'Posts',
      slugField: 'title',
      path: 'src/content/posts/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        content: fields.markdoc({
          label: 'Content',
          options: {
            image: {
              directory: 'src/assets/images/posts',
              publicPath: '../../assets/images/posts/',
            },
          },
        }),
      },
    }),
  },
  singletons: {
    about: singleton({
      label: 'About',
      format: { contentField: 'body' },
      path: 'src/content/about',
      schema: {
        title: fields.slug({
          name: { label: 'Title', description: 'The title of the post' },
        }),
        publishedDate: fields.date({ label: 'Published date' }),
        body: fields.markdoc({ label: 'Body' }),
      },
    }),
  },
});
