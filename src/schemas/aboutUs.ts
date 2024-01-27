export default {
  name: 'aboutUs',
  title: 'About Us',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
    {
      name: 'imageAlt',
      title: 'Image Alt',
      type: 'string',
    },
  ],
}
