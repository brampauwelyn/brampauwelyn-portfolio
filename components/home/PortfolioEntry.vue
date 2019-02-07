<template>
	<div class="portfolio-entry">
		<nuxt-link to="/projects/north-sea-products"> 
			<div class="portfolio-entry__overlay">
				<p class="portfolio-entry__category">
					Category: <span>webdesign / webdevelopment</span>
				</p>
				<h2 class="portfolio-entry__title">Zot van de noordzee</h2>
			</div>
			<img src="/images/zot-van-de-noordzee.jpg" alt="">
		</nuxt-link>
	</div>
</template>

<script>
export default {
  name: 'PortfolioEntry'
}
</script>

<style lang="scss">
.portfolio-entry{
	position: relative;
}

.portfolio-entry__overlay{
	width: 100%;
	height: 100%;
	position: absolute;
	background-color: #111;
	opacity: 0;
	transition: all 0.3s ease;
}

.portfolio-entry__category{
	color: rgba(255, 255, 255, 0.4);
	font-size: 14px;
	font-family: 'Work Sans', sans-serif;

	span{
		padding-bottom: 2px;
    border-bottom: 1px solid #373737;
	}
}


.portfolio-entry:hover{
	.portfolio-entry__overlay{
		opacity: 0.95;
	}
}

.portfolio-entry{
	img{
		object-fit: cover;
		width: 100%;
		height: 400px;
	}
}


</style>
