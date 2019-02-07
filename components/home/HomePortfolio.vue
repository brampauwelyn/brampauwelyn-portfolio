<template>
  <div id="home-portfolio" class="portfolio">
			<!-- entry -->
      <PortfolioEntry />
      <PortfolioEntry />
	</div>
</template>

<script>
import PortfolioEntry from '@/components/home/PortfolioEntry.vue'

export default {
  name: 'HomePortfolio',
  components: {
    PortfolioEntry
  }
}
</script>

<style lang="scss">
.portfolio{
  display: grid;
  grid-template-columns: 60% 40%;
  grid-template-rows: 400px;
  overflow: hidden;
}

</style>
