export default ({ app }, inject) => {
  const isDev = process.env.NODE_ENV !== 'production'
  const version = isDev ? 'draft' : 'published'
  inject('storyblok', {
    version
  })
}
