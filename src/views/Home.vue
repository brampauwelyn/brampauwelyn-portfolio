<template>
  <div class="home">
    <Header />
    <HomePortfolio />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import HomePortfolio from '@/components/home/HomePortfolio.vue'

export default {
  name: 'home',
  components: {
    Header,
    HomePortfolio
  }
}
</script>
