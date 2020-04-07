<template>
  <div>
    <nuxt />
    <Footer />

    <script src="/scripts/vendor.js"></script>
    <script src="/scripts/plugins.js"></script>
    <script src="/scripts/main.js"></script>
    <div id="bottom"></div>
  </div>
</template>
<script>
import Footer from '../components/Footer'

export default {
  components: {
    Footer
  }
}
</script>
<style></style>
