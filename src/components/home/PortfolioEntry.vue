<template>
	<div id="portfolio-entry" class="entry work-entry">
	  <div class="entry__image reveal reveal-in" :style="{ 'backgroundImage': 'url(' + src + ')' }"></div>
			<div class="entry__overlay">
				<div class="entry__overlay__content" data-pos="bottom">
					<div class="subtitle">Category: <span>{{ category }}</span></div>
				<div class="title">{{ title }}</div>
			</div>
		</div>
		<a :href="portfolioLink"></a>
	</div>
</template>

<script>
export default {
  name: 'PortfolioEntry',
  props: ['src', 'title', 'category', 'portfolioLink'],
}
</script>

<style lang="scss">



.entry .entry__image,
.entry .entry__overlay,
.entry a {
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	z-index: 1;
}

.entry .entry__overlay {
	display: table;
	background: #111111;
	opacity: 0;
	visibility: hidden;
	-webkit-transition: all 0.3s ease;
	transition: all 0.3s ease;
}

.entry .entry__overlay .entry__overlay__content {
	display: table-cell;
	padding: 50px;
}

.entry .entry__overlay .entry__overlay__content[data-pos="center"] {
	vertical-align: middle;
}

.entry .entry__overlay .entry__overlay__content[data-pos="top"] {
	vertical-align: top;
}

.entry .entry__overlay .entry__overlay__content[data-pos="bottom"] {
	vertical-align: bottom;
}

.entry .entry__overlay .entry__overlay__content .title {
	display: block;
	position: relative;
	font-family: 'Cardo';
	font-size: 22px;
	font-weight: 700;
	color: #ffffff;
	top: 10px;
	opacity: 0;
	-webkit-transition: all 0.3s ease;
	transition: all 0.3s ease;
}

.entry .entry__overlay .entry__overlay__content .subtitle {
	display: block;
	position: relative;
	font-size: 14px;
	color: rgba(255, 255, 255, 0.4);
	margin-bottom: 10px;
	top: 10px;
	opacity: 0;
	-webkit-transition: all 0.3s ease;
	transition: all 0.3s ease;
}

.entry .entry__overlay .entry__overlay__content .subtitle span {
	padding-bottom: 2px;
	border-bottom: 1px solid #373737;
}

.entry:hover .entry__overlay {
	opacity: 1;
	visibility: visible;
}

.entry:hover .entry__overlay .entry__overlay__content .title,
.entry:hover .entry__overlay .entry__overlay__content .subtitle {
	top: 0;
	opacity: 1;
}

@media (max-width:600px) {
	.entry .entry__overlay {
		display: none;
	}

}

.entry__image{
	background-size: cover;
	background-position: center center;
	background-repeat: no-repeat;
}
</style>
