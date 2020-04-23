<template>
  <div>
    <Header :links="links" />
    <nuxt />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  components: {
    Header
  },
  data () {
    return {
      links: []
    }
  },
  mounted () {
    const version = this.$storyblok.version
    this.$storyapi.get('cdn/links', {
      version,
      start_with: '/'
    }).then((res) => {
      this.links = Object.values(res.data.links)
    })
  }
}
</script>

<style>
</style>
