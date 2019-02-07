<template>
  <section class="container">
    <div>
      <Header/>
      <HomePortfolio />
    </div>
  </section>
</template>

<script>
import Header from '@/components/Header.vue';
import HomePortfolio from '@/components/home/HomePortfolio.vue'


export default {
  components: {
    Header,
    HomePortfolio
  }
}
</script>

<style>

</style>
