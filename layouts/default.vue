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
      const _initial = {
        root: [],
        childs: {}
      }

      const _temp = Object.values(res.data.links)
        .filter((_link) => {
          return !_link.is_startpage
        }).reduce((mapped, current) => {
          const parentId = current.parent_id
          if (parentId === 0) {
            mapped.root.push(current)
          } else if (Object.prototype.hasOwnProperty.call(mapped.childs, parentId)) {
            mapped.childs[parentId].push(current)
          } else {
            mapped.childs[parentId] = [current]
          }
          return mapped
        }, _initial)

      this.links = _temp.root.map((_link) => {
        const link = {
          ..._link,
          childs: []
        }
        if (Object.prototype.hasOwnProperty.call(_temp.childs, _link.id)) {
          link.childs = _temp.childs[_link.id]
        }
        return link
      })
    })
  }
}
</script>

<style>
</style>
