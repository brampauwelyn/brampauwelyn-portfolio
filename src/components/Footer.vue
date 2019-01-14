<template>
  <div id="footer">
	<footer class="footer">
		<div class="container">
			<ContactLink />
      <SocialMediaLinks />
      <BackToTop />
		</div>
	</footer>

  </div>
</template>

<script>
import ContactLink from "@/components/footer/ContactLink.vue";
import SocialMediaLinks from "@/components/footer/SocialMediaLinks.vue";
import BackToTop from "@/components/footer/BackToTop.vue";

export default {
  name: "Footer",
  components: {
    ContactLink,
    SocialMediaLinks,
    BackToTop
  }
};
</script>

<style lang="scss">
.footer {
  text-align: center;
  padding: 100px 0;
}

@media (max-width: 800px) {
  .footer {
    text-align: center;
  }
}
</style>
