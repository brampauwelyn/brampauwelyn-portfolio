<template>
	<div class="portfolio-entry">
		<nuxt-link to="/work/zot-van-de-noordzee"> 
			<div class="portfolio-entry__overlay">
				<p class="portfolio-entry__category">
					Category: <span>{{ item.category }}</span>
				</p>
				<h2 class="portfolio-entry__title">{{ item.name }}</h2>
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
	padding: 50px;
	position: absolute;
	background-color: #111;
	opacity: 0;
	transition: all 0.3s ease;
}

.portfolio-entry__category{
	color: rgba(255, 255, 255, 0.5);
	font-size: 14px;
	font-family: 'Work Sans', sans-serif;
	margin-bottom: 10px; 
	span{
		padding-bottom: 2px;
    border-bottom: 1px solid #373737;
	}
}

.portfolio-entry__title {
  display: block;
  position: relative;
  font-family: 'Cardo';
  font-size: 22px;
  font-weight: 700;
  color: #ffffff;
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
