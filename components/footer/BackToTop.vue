<template>
  <div id="back-to-top">
    <div class="back2top">Back to top</div>
  </div>
</template>

<script>
export default {
  name: 'BackToTop'
}
</script>

<style lang="scss">
.footer .back2top {
	min-width: 100px;
	position: fixed;
	bottom: 40px;
	right: 0;
	z-index: 10;
	font-family: 'Cardo';
	font-size: 14px;
	font-style: italic;
	cursor: pointer;
	opacity: 0;
	visibility: hidden;
	line-height: 100px;
	-webkit-transition: all 0.3s ease;
	transition: all 0.3s ease;
	-webkit-transform: rotate(-90deg);
	transform: rotate(-90deg);
}

.footer .back2top.visible {
	bottom: 50px;
	opacity: 1;
	visibility: visible;
}

.footer .back2top:hover {
	color: #111111;
}

@media (max-width:800px) {

	.footer .back2top {
		position: relative;
		line-height: 1;
		-webkit-transform: rotate(0deg);
		transform: rotate(0deg);
	}

	.footer .back2top.visible {
		bottom: 0;
	}

}
</style>
