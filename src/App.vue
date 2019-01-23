<template>
  <div id="app">
    <Navigation />
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'
import Footer from '@/components/Footer.vue'


export default {
  name: 'App',
  components: {
    Navigation, Footer
  }
}
</script>

<style lang="scss">
@import '@/scss/_base.scss';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>


