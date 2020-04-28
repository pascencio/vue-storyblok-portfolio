<template>
  <b-card no-body class="overflow-hidden;padding-bottom:0.5em;">
    <b-row no-gutters>
      <b-col>
        <b-card-img :src="block.img_src" :alt="block.img_alt" class="rounded-0" />
      </b-col>
      <b-col>
        <b-card-body :title="block.title">
          <b-card-text>
            {{ block.text }}
          </b-card-text>
        </b-card-body>
        <b-button :to="block.slug" variant="primary">
          Ver más
        </b-button>
      </b-col>
    </b-row>
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
