<template>
  <b-container>
    <component :is="block.component" v-for="block in story.content.body" :key="block._uid" v-bind="{block:block}" />
  </b-container>
</template>

<script>

export default {
  asyncData (context) {
    const version = context.app.$storyblok.version
    const slug = context.params.slug || 'default'
    return context.app.$storyapi
      .get(`cdn/stories/${slug}`, {
        version
      })
      .then((res) => {
        const data = res.data
        // eslint-disable-next-line no-console
        console.log(`Story ${slug} body: `, data.story.content.body)
        return data
      })
      .catch((res) => {
        context.error({
          statusCode: res.response.status,
          message: res.response.data
        })
      })
  },
  data () {
    return {
      story: {
        content: {
          body: []
        }
      }
    }
  }
}
</script>

<style>
</style>
