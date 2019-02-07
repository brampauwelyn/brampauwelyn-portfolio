<template>
  <div class="imageblock__content">
		<h3>Hi there, I'm Bram Pauwelyn, I help forward-thinking clients succeed in digital culture.</h3>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>			
	</div>
</template>

<script>
export default {
  name: 'AboutText'
}
</script>

<style lang="scss" scoped>
  .imageblock .imageblock__content {
    width: 50%;
    padding: 100px;
    position: relative;
  }

  .imageblock.left .imageblock__content {
    left: 50%;
  }

  @media (max-width:800px) {
	.imageblock .imageblock__content {
		width: 100%;
		left: 0 !important;
		padding: 100px 50px;
  }
}
</style>
