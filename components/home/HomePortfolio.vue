<template>
  <div id="home-portfolio" class="portfolio">
			<!-- entry -->
      <PortfolioEntry 
       :key="index" v-for="(item,index) in this.$root.allWork"
       :category="item.category"
       :name="item.name"
       :seoUrl="item.seoUrl"
       :image="item.image"
      />
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
  grid-template-columns: 0.5fr 0.5fr;
  grid-template-rows: 400px;
}

</style>
