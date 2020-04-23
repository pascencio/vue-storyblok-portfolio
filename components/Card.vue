<template>
  <b-card
    :title="block.title"
    :img-src="block.img_src"
    :img-alt="block.img_alt"
    style="max-width: 20rem;"
    img-top
  >
    <b-card-text>
      {{ block.text }}
    </b-card-text>

    <b-button :to="block.slug" variant="primary">
      Ver más
    </b-button>
  </b-card>
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
