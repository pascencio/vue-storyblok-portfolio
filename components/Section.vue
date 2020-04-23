<template>
  <b-row>
    <b-col v-for="item in block.body" :key="item._uid" :cols="block.cols">
      <component :is="item.component" v-bind="{block:item}" />
    </b-col>
  </b-row>
</template>

<script>
export default {
  props: {
    block: {
      type: Object,
      required: true
    }
  }
}
</script>
