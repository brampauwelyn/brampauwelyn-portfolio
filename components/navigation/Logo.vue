<template>
  <nuxt-link to="/" class="main-logo">
    <img src="/images/logo.svg" width="60" alt="">
  </nuxt-link>
</template>


<script>
export default {
  name: 'Logo'
}
</script>

<style lang="scss">
.header .main-logo {
	display: inline-block;
	text-transform: uppercase;
	font-size: 22px;
	font-weight: 700;
	color: #111111;
	line-height: 40px;
	letter-spacing: 10px;
	margin-top: 55px;
}
</style>

