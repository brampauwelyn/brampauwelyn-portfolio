<template>
  <div class="imageblock__holder">
    <img src="" alt="">
  </div>
</template>

<script>
export default {
  name: 'AboutImage'
}
</script>

<style lang="scss" scoped>
  .imageblock .imageblock__holder {
    width: 50%;
    position: absolute;
    top: 0;
    bottom: 0;
  }

  .imageblock.left .imageblock__holder {
	left: 0;
}

.imageblock.right .imageblock__holder {
	right: 0;
}

@media (max-width:800px) {
	.imageblock .imageblock__holder {
		width: 100%;
		height: 50vh;
		position: relative;
	}
}
</style>

