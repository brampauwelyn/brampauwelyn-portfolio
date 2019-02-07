<template>
  <!-- about -->
	<div class="about">
		<div class="container">
			<div class="imageblock left">
        <AboutImage />
        <AboutText />
			</div>
		</div>
	</div>
  </div>
</template>

<script>
import AboutImage from '@/components/about/AboutImage.vue';
import AboutText from '@/components/about/AboutText.vue';

export default {
  components: {
    AboutImage,
    AboutText
  }
}
</script>


<style lang="scss" scoped>
  .imageblock {
    position: relative;
  }
</style>

