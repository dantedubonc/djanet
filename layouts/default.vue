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
  },
  mounted() {
    console.log('mounted')
    console.log(this.$t('Head.title'))
  },
  head() {
    return {
      title: this.$t('Head.title'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('Head.description')
        },
        { hid: 'keywords', name: 'keywords', content: this.$t('Head.keywords') }
      ]
    }
  }
}
</script>
<style></style>
