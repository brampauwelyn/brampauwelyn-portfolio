<template>
  <div id="footer">
	<footer class="footer">
		<div class="container">
			<div class="copy">
				<p>Feel free to contact me anytime, anywhere <br> <a href="#" class="link">hello@brampauwelyn.be</a></p>
			</div>
      <SocialMediaLinks />
      <BackToTop />
		</div>
	</footer>

  </div>
</template>

<script>
import SocialMediaLinks from '@/components/footer/SocialMediaLinks.vue' 
import BackToTop from '@/components/footer/BackToTop.vue'

export default {
  name: 'Footer',
  components: {
    SocialMediaLinks, BackToTop
  }
}
</script>

<style lang="scss">
.footer {
	text-align: center;
	padding: 100px 0;
}

.footer .copy {
	margin-bottom: 50px;
}

.footer .copy:before {
	display: block;
	content: '';
	width: 2px;
	height: 30px;
	margin: 0 auto 50px;
	background: #111111;
}

@media (max-width:800px) {
	.footer {
		text-align: center;
	}

}
</style>
