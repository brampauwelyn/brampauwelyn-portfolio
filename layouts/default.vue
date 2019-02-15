<template>
  <div>
    <Navigation />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue';
import Footer from '@/components/Footer.vue';
import Work from '@/static/work.json';

export default {
  name: 'default',
  data: function(){
    return {
      allWork: Work
    }
  },
  components: {
    Navigation,
    Footer
  }
}
</script>

<style>
@import '@/scss/_base.scss';

html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

</style>
