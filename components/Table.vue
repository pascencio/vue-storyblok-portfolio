<template>
  <b-table striped hover :items="items" />
</template>

<script>
export default {
  props: {
    block: {
      type: Object,
      required: true
    }
  },
  computed: {
    items () {
      let items = []
      if (this.block.header.length > 0) {
        const header = this.block.header[0]
        items = this.block.rows.map((row) => {
          const item = {}
          for (let i = 0; i < row.columns.length; i++) {
            const name = header.columns[i].content
            const value = row.columns[i].content
            item[`${name}`] = value
          }
          return item
        })
      }

      return items
    }
  }
}
</script>
