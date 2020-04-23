<template>
  <b-navbar toggleable="lg" type="light">
    <b-navbar-brand href="#">
      Patricio Ascencio
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse" />

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item v-for="link in links" :key="link.slug" :to="link.slug">
          {{ link.name }}
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>
<script>
export default {
  props: {
    links: {
      type: Array,
      required: true
    }
  }
}
</script>
<style>
</style>
